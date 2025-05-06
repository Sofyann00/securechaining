"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/contexts/cart-context";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/user-context";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, XCircle } from "lucide-react";

export function CheckoutForm() {
  const { state, clearCart } = useCart();
  const { user, addOrder } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showExpiredDialog, setShowExpiredDialog] = useState(false);

  useEffect(() => {
    if (!showPaymentDialog) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setShowPaymentDialog(false);
          setShowExpiredDialog(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showPaymentDialog]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      router.push("/login");
      return;
    }

    setIsLoading(true);
    try {
      const orderData = {
        userId: user._id,
        items: state.items.map(item => ({
          ...item,
          id: item.id.toString()
        })),
        total: grandTotal,
        status: "pending" as const,
        shippingAddress: formData.address,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone
      }

      // Save to MongoDB
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to create order')
      }

      const savedOrder = await response.json()

      // Update local state
      addOrder({
        ...orderData,
        id: savedOrder._id,
        date: new Date().toISOString(),
      })

      // Clear cart
      clearCart()
      toast.success("Order placed successfully!")
      
      // Show payment dialog instead of redirecting
      setShowPaymentDialog(true);
      setTimeLeft(3600); // Reset timer to 1 hour
    } catch (error) {
      console.error('Checkout error:', error)
      toast.error("Failed to place order. Please try again.")
    } finally {
      setIsLoading(false)
    }
  };

  const grandTotal = total;

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Full Name</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <Input
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block mb-2">Address</label>
            <Textarea
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          {/* <div>
            <label className="block mb-2">Courier Service</label>
            <Select
              value={formData.courier}
              onValueChange={(value) =>
                setFormData({ ...formData, courier: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select courier" />
              </SelectTrigger>
              <SelectContent>
                {COURIER_OPTIONS.map((courier) => (
                  <SelectItem key={courier.id} value={courier.id}>
                    {courier.name} - Rp {courier.price.toLocaleString("id-ID")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <div className="border-t pt-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rp {grandTotal.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Place Order"}
        </Button>
      </form>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-4">
              Please pay to this account number before:
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-2xl font-mono text-center font-bold">
              {formatTime(timeLeft)}
            </div>
            <div className="text-center space-y-2">
              <img src="/qr_img.png" alt="QR Code" className="mx-auto w-40 h-40 object-contain" />
              <div className="text-center mb-2">Secure Cloud</div>
            </div>
            <Button 
              onClick={() => {
                setShowPaymentDialog(false);
                clearCart();
                setShowSuccessDialog(true);
                setTimeout(() => {
                  setShowSuccessDialog(false);
                  router.push("/profile");
                }, 6000);
              }}
              className="w-full"
            >
              I have completed the payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-4">
              Payment Successful!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <p>Thank you for your payment. Redirecting to your profile...</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showExpiredDialog} onOpenChange={setShowExpiredDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-4 text-red-600">
              Payment Failed
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <XCircle className="w-16 h-16 text-red-500 mx-auto" />
            <p>Sorry, your payment is failed.</p>
            <Button 
              onClick={() => {
                setShowExpiredDialog(false);
                router.push("/cart");
              }}
              className="w-full"
            >
              Return to Cart
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

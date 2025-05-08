
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { BadgeIndianRupee, CreditCard, Wallet, IndianRupee } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  pincode: z.string().min(6, {
    message: "Pincode must be at least 6 characters.",
  }),
  paymentMethod: z.enum(["card", "cod", "upi"], {
    required_error: "Please select a payment method.",
  }),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvv: z.string().optional(),
  upiId: z.string().optional(),
}).refine(data => {
  if (data.paymentMethod === "card") {
    return !!data.cardNumber && !!data.cardExpiry && !!data.cardCvv;
  }
  if (data.paymentMethod === "upi") {
    return !!data.upiId;
  }
  return true;
}, {
  message: "Please fill all required payment fields",
  path: ["paymentMethod"],
});

export function CheckoutForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "card",
      cardNumber: "",
      cardExpiry: "",
      cardCvv: "",
      upiId: "",
    },
  });

  const paymentMethod = form.watch("paymentMethod");

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/checkout-success");
      
      toast({
        title: "Payment Successful",
        description: `Your order has been placed successfully using ${getPaymentMethodName(values.paymentMethod)}!`,
      });
    }, 2000);
  }

  const getPaymentMethodName = (method: string) => {
    switch(method) {
      case "card": return "Credit/Debit Card";
      case "cod": return "Cash on Delivery";
      case "upi": return "UPI Payment";
      default: return method;
    }
  };

  return (
    <div className="bg-card border rounded-lg p-6 mt-6">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="h-6 w-6" />
        <h2 className="text-lg font-bold">Payment Details</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your shipping address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="pincode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pincode</FormLabel>
                  <FormControl>
                    <Input placeholder="Pincode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="border-t pt-6 mt-6">
            <div className="flex items-center gap-2 mb-6">
              <BadgeIndianRupee className="h-6 w-6" />
              <h2 className="text-lg font-bold">Payment Method</h2>
            </div>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="card" id="card" checked={field.value === "card"} />
                        <Label htmlFor="card" className="flex items-center cursor-pointer">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="cod" id="cod" checked={field.value === "cod"} />
                        <Label htmlFor="cod" className="flex items-center cursor-pointer">
                          <IndianRupee className="h-4 w-4 mr-2" />
                          Cash on Delivery
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-md cursor-pointer hover:bg-accent">
                        <RadioGroupItem value="upi" id="upi" checked={field.value === "upi"} />
                        <Label htmlFor="upi" className="flex items-center cursor-pointer">
                          <Wallet className="h-4 w-4 mr-2" />
                          UPI Payment
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {paymentMethod === "card" && (
              <div className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="1234 5678 9012 3456" 
                          maxLength={19}
                          {...field}
                          onChange={(e) => {
                            // Format card number with spaces every 4 digits
                            const value = e.target.value.replace(/\s/g, '');
                            const formattedValue = value
                              .replace(/\D/g, '')
                              .replace(/(\d{4})(?=\d)/g, '$1 ');
                            field.onChange(formattedValue);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="cardExpiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry (MM/YY)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="MM/YY" 
                            maxLength={5}
                            {...field}
                            onChange={(e) => {
                              // Format expiry date with slash after 2 digits
                              const value = e.target.value.replace(/\D/g, '');
                              if (value.length <= 2) {
                                field.onChange(value);
                              } else {
                                field.onChange(value.slice(0, 2) + '/' + value.slice(2, 4));
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cardCvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="123" 
                            maxLength={3}
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <FormField
                control={form.control}
                name="upiId"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel>UPI ID</FormLabel>
                    <FormControl>
                      <Input placeholder="yourname@upi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {paymentMethod === "cod" && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm">Cash on delivery is available for all orders. You'll need to pay the full amount when your order is delivered.</p>
              </div>
            )}
          </div>

          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total Amount:</span>
              <span className="font-bold text-xl">₹{total.toLocaleString()}</span>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isProcessing}
            >
              {isProcessing 
                ? "Processing..." 
                : paymentMethod === "cod" 
                  ? `Place Order for ₹${total.toLocaleString()}`
                  : `Pay ₹${total.toLocaleString()}`
              }
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

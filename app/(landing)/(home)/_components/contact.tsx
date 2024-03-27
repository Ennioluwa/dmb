"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const RegisterSchema = z.object({
    email: z.string().email({
      message: "Email is required",
    }),
    name: z.string().min(1, {
      message: "Name is required",
    }),
    phone: z.string().min(1, {
      message: "Phone number is required",
    }),
    message: z.string().min(1, {
      message: "Message is required",
    }),
  });

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    console.log(values);

    setSuccess("Response received. We will get back to you shortly!");

    startTransition(() => {
      //   register(values).then((data) => {
      //     setError(data.error);
      //     setSuccess(data.success);
      //   });
    });
  };

  return (
    <section id="contact" className=" bg-white text-black">
      <div className=" py-20 container flex flex-col gap-6 overflow-clip">
        <h2 className=" lg:w-2/3 text-center lg:text-left">
          Chat with our team
        </h2>
        <p className=" text-center lg:text-left text-[#595959] ">
          Have a question or need assistance? Our friendly team is here to help.
          <br />
          Reach out to us, and we'll get back to you promptly.
        </p>
        <div className=" flex flex-col lg:flex-row lg:items-center gap-20">
          <div className=" flex flex-col gap-12 lg:flex-1 order-2 lg:order-1">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10"
              >
                <div className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className=" space-y-6">
                        <FormLabel className=" text-xl font-semibold mb-3 pb-3">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="What's your name?"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className=" space-y-6">
                        <FormLabel className=" text-xl font-semibold mb-3 pb-3">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Where can we reach you?"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className=" space-y-6">
                        <FormLabel className=" text-xl font-semibold mb-3 pb-3">
                          Phone
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={isPending}
                            placeholder="Phone number (optional)"
                            type="text"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className=" space-y-6">
                        <FormLabel className=" text-xl font-semibold mb-3 pb-3">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            disabled={isPending}
                            placeholder="How can we help you? Let us know your query..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                  disabled={isPending}
                  type="submit"
                  className="w-full font-semibold text-white hover:bg-black/90 hover:text-white"
                  variant={"outline"}
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          <div className=" lg:flex-1 w-full max-w-lg lg:max-w-full mx-auto order-1 lg:order-2">
            <AspectRatio ratio={1 / 1}>
              <Image
                src="/images/contact.jpg"
                alt="Image"
                className="rounded-lg object-cover"
                fill
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

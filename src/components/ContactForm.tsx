"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handle form submission logic here
    console.log("Form submitted:", formData);

    setFormData({ fullName: "", email: "", message: "" });
    setIsLoading(false);
  };
 
  return (
    <div>
      <div className='flex flex-wrap justify-center items-start gap-8 my-16 px-4'>
        <div className='w-full md:w-2/5 max-w-md'>
          <h2 className='text-4xl md:text-5xl font-semibold mb-8 text-primary'>
            GET IN TOUCH!
          </h2>
          <form
            onSubmit={handleSubmit}
            className='space-y-6'>
            <div>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium mb-2'>
                Full Name
              </label>
              <Input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                placeholder='John Doe'
                required
                className='w-full  border-gray-300 rounded-sm'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium mb-2'>
                Email
              </label>
              <Input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='john@example.com'
                required
                className='w-full  border-gray-300 rounded-sm'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium mb-2'>
                Message
              </label>
              <Textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your message here...'
                required
                className='w-full  border-gray-300 rounded-sm'
                rows={4}
              />
            </div>
            <Button
              type='submit'
              disabled={isLoading}
              className='w-fit h-10 bg-[--primary] text-white'
              onClick={() => {
                toast({
                  title: "Sucsees",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                });
              }}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
        <div className='w-full md:w-1/2 max-w-xl mt-8 md:mt-0'>
          <div className='rounded-lg overflow-hidden w-full aspect-square'>
            <iframe
              className='w-full h-full'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Google Maps'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

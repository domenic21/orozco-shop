'use client'

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react';



const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    //console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')

    setSuccessMessage('');
    const id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

    emailjs
      .sendForm(
        id,
        template,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID,
        }
      )
      .then(
        (response) => {
          setSuccessMessage("Message sent successfully");
          console.log("Message sent successfully", response.text);
        },
        (error) => {
          setSuccessMessage("Message failed to send");
          console.log("Message failed to send", error.text);
        }
      ).finally(() => {
        
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setPhoneNumber('');
      }
      );
  }

  

  return (

    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
          
            <form onSubmit={handleSubmit} className="space-y-4" ref={form}>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required 
                name="user_name"
                />
           
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                name="user_email"
                />
              </div>
              <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required 
                  name="phoneNumber"
                  />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required 
                  name="message"
                  />
              </div>
              
              <Button type="submit" className="w-full" value="Send">Send Message</Button>
            </form>
            {successMessage && <p className="mt-8 text-green-500 text-2xl">{successMessage}</p>}
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <span>732-713-360</span>
                 
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
           
                  <span>732-713-7765</span>
              
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                  <span>732-259-4200</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <span>
                sales@manuelhomesupplies.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <span> 760 Bound Brook Rd, Dunellen, NJ 08812</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] relative">
            <iframe
                width="520"
                height="400"
                style={{ border: 0, margin: 0 }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20760%20Bound%20Brook%20Rd,%20Dunellen,%20NJ%2008812%20dunellen+(Manuel%20Orosco%20Home%20Builder%20&amp;%20Home%20Supplies%20Inc)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="absolute inset-0 w-full h-full"
              ></iframe>
             
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
    


}

export default ContactForm;

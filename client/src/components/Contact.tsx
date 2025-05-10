import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      // Save the name and email for future messages
      setSavedName(data.name);
      setSavedEmail(data.email);
      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute left-1/4 top-1/2 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 top-0 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 top-1/3 w-72 h-72 bg-indigo-800/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-40 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-6 mb-8 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>Get In</span> 
            <span className="bg-purple-600 text-white font-black px-4 py-2 rounded-md shadow-lg text-4xl md:text-6xl tracking-wider rotate-1 transform hover:rotate-0 transition-transform duration-300">TOUCH</span>
          </h2>
          <p className="text-center text-neutral/70 mb-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
          </p>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          <motion.div 
            className="md:w-2/5 bg-gradient-to-br from-secondary/20 to-dark/80 backdrop-blur-md rounded-xl p-8 shadow-lg border border-accent/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-accent/30">
                <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Contact Information</span>
              </h3>
              <div className="space-y-5">
                <div className="flex items-center p-3 rounded-lg bg-dark/30 hover:bg-dark/40 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/60 to-accent/30 text-white rounded-full mr-4 shadow-md group-hover:shadow-accent/20 transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral/70 mb-1">Email</p>
                    <p className="font-medium">baningphilip1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-dark/30 hover:bg-dark/40 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/60 to-accent/30 text-white rounded-full mr-4 shadow-md group-hover:shadow-accent/20 transition-all">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral/70 mb-1">Location</p>
                    <p className="font-medium">Grambling, Louisiana, USA</p>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-dark/30 hover:bg-dark/40 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/60 to-accent/30 text-white rounded-full mr-4 shadow-md group-hover:shadow-accent/20 transition-all">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral/70 mb-1">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/pabaning" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-accent transition-colors"
                    >
                      linkedin.com/in/pabaning
                    </a>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-dark/30 hover:bg-dark/40 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/60 to-accent/30 text-white rounded-full mr-4 shadow-md group-hover:shadow-accent/20 transition-all">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral/70 mb-1">GitHub</p>
                    <a 
                      href="https://github.com/Alanperry1" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-medium hover:text-accent transition-colors"
                    >
                      github.com/Alanperry1
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-accent/30">
                <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Connect With Me</span>
              </h3>
              <div className="flex justify-center space-x-5">
                <a 
                  href="https://linkedin.com/in/pabaning" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/80 to-purple-600/80 text-white rounded-full shadow-lg hover:shadow-accent/30 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://github.com/Alanperry1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/80 to-purple-600/80 text-white rounded-full shadow-lg hover:shadow-accent/30 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub profile"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="mailto:baningphilip1@gmail.com" 
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-accent/80 to-purple-600/80 text-white rounded-full shadow-lg hover:shadow-accent/30 hover:scale-110 transition-all duration-300"
                  aria-label="Send email"
                >
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {isSuccess ? (
              <div className="bg-gradient-to-br from-secondary/20 to-dark/80 backdrop-blur-md rounded-xl p-8 shadow-lg border border-accent/20 relative overflow-hidden">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/20 to-purple-600/10 blur-sm pointer-events-none"></div>
                
                <div className="text-center pt-6 pb-6 relative z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 border border-accent/40 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-accent/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent mb-4">Message Sent Successfully</h3>
                  
                  <p className="text-neutral/80 mb-8 max-w-md mx-auto">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                  
                  <Button 
                    type="button" 
                    onClick={() => {
                      form.reset({
                        name: savedName, 
                        email: savedEmail,
                        subject: "",
                        message: ""
                      });
                      setIsSuccess(false);
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-accent/80 to-purple-600/80 hover:from-accent hover:to-purple-600 text-white rounded-lg shadow-lg hover:shadow-accent/30 transition-all transform hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center font-medium">
                      Send Another Message
                    </span>
                  </Button>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="bg-gradient-to-br from-secondary/20 to-dark/80 backdrop-blur-md rounded-xl p-8 shadow-lg border border-accent/20"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-accent/30">
                      <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">Send a Message</span>
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="relative group">
                          <FormLabel className="text-sm text-neutral mb-2 inline-block">Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 bg-dark/60 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-foreground placeholder:text-neutral/50"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="relative group">
                          <FormLabel className="text-sm text-neutral mb-2 inline-block">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email" 
                              placeholder="Your email" 
                              className="w-full px-4 py-3 bg-dark/60 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-foreground placeholder:text-neutral/50"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400 text-xs mt-1" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="mb-6 relative group">
                        <FormLabel className="text-sm text-neutral mb-2 inline-block">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Message subject" 
                            className="w-full px-4 py-3 bg-dark/60 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-foreground placeholder:text-neutral/50"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative group">
                        <FormLabel className="text-sm text-neutral mb-2 inline-block">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={5} 
                            placeholder="Your message" 
                            className="w-full px-4 py-3 bg-dark/60 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-foreground placeholder:text-neutral/50 resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-500 text-white py-3 rounded-lg transition-all shadow-lg hover:shadow-accent/30 font-medium text-sm"
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-transparent border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>Send Message</>
                      )}
                    </span>
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

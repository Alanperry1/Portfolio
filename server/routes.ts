import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import { contactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      const contact = await storage.saveContactMessage(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Your message has been received! I'll get back to you soon.",
        id: contact.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "There was an error processing your message. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.resolve(process.cwd(), "attached_assets/RESUME.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Baning_Philip_Amponsah_Resume.pdf");
      fs.createReadStream(resumePath).pipe(res);
    } else {
      res.status(404).json({ 
        success: false, 
        message: "Resume file not found" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

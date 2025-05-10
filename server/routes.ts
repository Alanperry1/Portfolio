import type { Express } from "express";
import { createServer, type Server } from "http";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
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

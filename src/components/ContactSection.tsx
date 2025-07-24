import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  officeHours?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    icon?: string;
  }>;
}

interface ContactSectionProps {
  contact: ContactInfo;
}

export const ContactSection = ({ contact }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href={`mailto:${contact.email}`} className="academic-link">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {contact.phone && (
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href={`tel:${contact.phone}`} className="academic-link">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Address */}
                {contact.address && (
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Office Address</div>
                      <div className="text-muted-foreground whitespace-pre-line">
                        {contact.address}
                      </div>
                    </div>
                  </div>
                )}

                {/* Office Hours */}
                {contact.officeHours && (
                  <div className="flex items-start gap-4">
                    <ExternalLink className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Office Hours</div>
                      <div className="text-muted-foreground">
                        {contact.officeHours}
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Links */}
                {contact.socialLinks && contact.socialLinks.length > 0 && (
                  <div className="pt-4 border-t">
                    <div className="font-medium mb-3">Connect with me</div>
                    <div className="flex flex-wrap gap-2">
                      {contact.socialLinks.map((link, index) => (
                        <Button key={index} variant="outline" size="sm" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {link.platform}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="pt-6 border-t text-center">
                  <p className="text-muted-foreground mb-4">
                    I'm always interested in discussing research opportunities, collaborations, 
                    and academic discussions in my field.
                  </p>
                  <Button asChild>
                    <a href={`mailto:${contact.email}?subject=Academic Inquiry`}>
                      Get in Touch
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
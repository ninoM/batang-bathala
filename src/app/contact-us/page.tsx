import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-gradient" />
      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Connect with Batang Bathala</h1>
        
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-6">
          <p className="text-lg mb-6 text-card-foreground">
            Join our community and stay updated on our latest yoga classes and mindfulness events for children.
          </p>
          
          <div className="space-y-4">
            <Link href="https://www.instagram.com/batangbathala" target="_blank" rel="noopener noreferrer" className="block mb-4">
              <Button variant="outline" size="lg" className="w-full flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Instagram className="w-5 h-5 mr-2" />
                Follow us on Instagram
              </Button>
            </Link>
            
            <Link href="https://www.facebook.com/profile.php?id=61564865915067" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" size="lg" className="w-full flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Facebook className="w-5 h-5 mr-2" />
                Like us on Facebook
              </Button>
            </Link>
          </div>
        </div>
        
        <p className="mt-8 text-muted-foreground">
          We look forward to connecting with you and sharing our journey of mindfulness and yoga for children.
        </p>
      </div>
    </div>
  )
}


import { useState } from 'react';
import digimaayaLogo from 'figma:asset/875cae2f20c002d2f45cd08d3c927dde653b100b.png';
import { Menu, X, Wallet } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';

interface HeaderProps {
  onLogoClick?: () => void;
}

export function Header({ onLogoClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const navLinks = [
    { label: 'Live Sales', href: '#live-sales' },
    { label: 'Upcoming', href: '#upcoming-sales' },
    { label: 'Past Projects', href: '#past-projects' },
    { label: 'About', href: '#about' },
  ];

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-6 hover:opacity-80 transition-opacity"
          >
            <img src={digimaayaLogo} alt="DigiMaaya" className="h-12 w-auto" />
            <div className="hidden sm:block h-8 w-px bg-border" />
            <div className="hidden sm:block text-left">
              <h2 className="text-xl font-maven-pro" style={{
                background: 'linear-gradient(135deg, #E3107A 0%, #FF7F2C 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                SpringBoard
              </h2>
              <p className="text-xs text-muted-foreground">
                Fundraising Infrastructure
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsLoginDialogOpen(true)}
              className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(90deg, #E3107A 0%, #FF7F2C 100%)' }}
            >
              Login
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Login Dialog */}
      <Dialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Login</DialogTitle>
            <DialogDescription className="text-sm text-gray-400">
              Choose your preferred login method
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <h3 className="text-sm font-maven-pro text-gray-300 mb-3">Login with Wallet</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary transition-colors text-left">
                  <Wallet className="w-5 h-5" style={{ color: '#E3107A' }} />
                  <span className="text-white">Gate Wallet</span>
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary transition-colors text-left">
                  <Wallet className="w-5 h-5" style={{ color: '#E3107A' }} />
                  <span className="text-white">Metamask</span>
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary transition-colors text-left">
                  <Wallet className="w-5 h-5" style={{ color: '#E3107A' }} />
                  <span className="text-white">BitGet</span>
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-primary transition-colors text-left">
                  <Wallet className="w-5 h-5" style={{ color: '#E3107A' }} />
                  <span className="text-white">Trust Wallet</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-gray-900 px-2 text-gray-400">or</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-maven-pro text-gray-300 mb-3">Login with</h3>
              <button className="w-full flex items-center justify-center gap-3 p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-gray-900 font-maven-pro">Google</span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
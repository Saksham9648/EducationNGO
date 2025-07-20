"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Flower2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: "मुख्य पृष्ठ", href: "#home" },
    { name: "हमारे बारे में", href: "#about" },
    { name: "घोषणा", href: "#announcement" },
    { name: "सनातन कार्यशाला", href: "#karyashala" },
    { name: "चित्रमाला", href: "#gallery" },
    { name: "संपर्क", href: "#contact" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and NGO Name */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full">
              <img src="/logo.jpg" alt="" className="h-10 w-10 object-contain text-white" />
            </div>
            <div className="text-xl font-bold text-saffron-700">रामायण वैदिक एजुकेशन फाउंडेशन</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-saffron-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/payment">
                <Button className="bg-saffron-600 hover:bg-saffron-700 text-white">दान करें</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-saffron-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/payment" onClick={() => setIsOpen(false)}>
                <Button className="bg-saffron-600 hover:bg-saffron-700 text-white w-full mt-2">दान करें</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

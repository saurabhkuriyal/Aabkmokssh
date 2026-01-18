"use client";
import { Banner } from "@/components/ui/banner";
import { ArrowRight } from "lucide-react";

export default function BannerNew() {
  return (
    <Banner variant="muted" className="dark text-foreground bg-pink-300 my-3 rounded-2xl border-2  mt-5 animate-bounce">
      <div className="w-full">
        <p className="flex justify-center text-sm">
          <a href="#" className="group">
            <span className="me-1 text-base leading-none">✨</span>
            Introducing transactional and marketing emails
            <ArrowRight
              className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </p>
      </div>
    </Banner>
  )
}

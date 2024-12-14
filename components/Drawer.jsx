'use client'
import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const Drawer = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>View license</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-red-300">Sorry...</DialogTitle>
              <DialogDescription className="text-black">
                This license is currently unavailable. Contact me and let's interact. Thank You.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
      </Dialog>

    </div>
  )
}

export default Drawer
  
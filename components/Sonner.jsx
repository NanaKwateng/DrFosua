"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

// export function SonnerDemo() {
//   return (
//     <Button
//       variant="outline"
//       onClick={() =>
//         toast("Event has been created", {
//           description: "Sunday, December 03, 2023 at 9:00 AM",
//           action: {
//             label: "Undo",
//             onClick: () => console.log("Undo"),
//           },
//         })
//       }
//     >
//       Show Toast
//     </Button>
//   )
// }


const Sonner = () => {
  return (
    <div>
        <Button
            variant="outline"
            onClick={() =>
                toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
                })
            }
            >
            View License
        </Button>
    </div>
  )
}
export default Sonner


// import to the app layout

// import { Toaster } from "@/components/ui/sonner"

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head />
//       <body>
//         <main>{children}</main>
//         <Toaster />
//       </body>
//     </html>
//   )
// }


// usage example
// import { toast } from "sonner"
// toast("Event has been created.")





import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET() {

  try {
      const authenticationParamaters= getUploadAuthParams({
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string, 
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        

    })

    return Response.json({
        authenticationParamaters,
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    })
  } catch (error) {
    console.error("Authentication for imageKit failed:", error)
      return Response.json(
          {
          error: "Authentication for imageKit failed",
          },
          {status: 500}
      )
  }
}
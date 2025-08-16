declare module 'resend' {
  interface ResendResponse {
    id: string
    from: string
    to: string[]
    created_at: string
  }

  export class Resend {
    constructor(apiKey: string)
    emails: {
      send(options: {
        from: string
        to: string[]
        subject: string
        html: string
      }): Promise<ResendResponse>
    }
  }
} 
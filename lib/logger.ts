// Simple logging utility for debugging form submissions
export class Logger {
  private static isDevelopment = process.env.NODE_ENV === 'development'

  static info(message: string, data?: any) {
    if (this.isDevelopment) {
      console.log(`ℹ️ [INFO] ${message}`, data || '')
    }
  }

  static error(message: string, error?: any) {
    console.error(`❌ [ERROR] ${message}`, error || '')
  }

  static success(message: string, data?: any) {
    if (this.isDevelopment) {
      console.log(`✅ [SUCCESS] ${message}`, data || '')
    }
  }

  static warn(message: string, data?: any) {
    console.warn(`⚠️ [WARN] ${message}`, data || '')
  }

  // Log form submission attempts
  static logFormSubmission(method: string, success: boolean, error?: any) {
    const timestamp = new Date().toISOString()
    const logData = {
      timestamp,
      method,
      success,
      error: error?.message || error
    }

    if (success) {
      this.success(`Form submitted via ${method}`, logData)
    } else {
      this.error(`Form submission failed via ${method}`, logData)
    }

    // In production, you might want to send this to an analytics service
    if (!this.isDevelopment && !success) {
      // Example: Send to analytics or error tracking service
      // analytics.track('form_submission_error', logData)
    }
  }
}
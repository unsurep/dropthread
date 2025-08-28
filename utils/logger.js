// Logging levels
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  FATAL: 4
};

// Color codes for console output
const COLORS = {
  DEBUG: '\x1b[36m', // Cyan
  INFO: '\x1b[32m',  // Green
  WARN: '\x1b[33m',  // Yellow
  ERROR: '\x1b[31m', // Red
  FATAL: '\x1b[35m', // Magenta
  RESET: '\x1b[0m'   // Reset
};

class Logger {
  constructor(options = {}) {
    this.level = options.level || (process.env.NODE_ENV === 'production' ? LOG_LEVELS.INFO : LOG_LEVELS.DEBUG);
    this.isServer = typeof window === 'undefined';
    this.enableColors = options.colors !== false;
  }

  shouldLog(level) {
    return level >= this.level;
  }

  formatTimestamp() {
    return new Date().toISOString();
  }

  formatMessage(level, message, data) {
    const timestamp = this.formatTimestamp();
    const levelName = Object.keys(LOG_LEVELS)[level];
    const prefix = `[${timestamp}] [${levelName}]`;
    
    if (this.isServer) {
      // Server-side: Add colors if enabled
      const color = this.enableColors ? COLORS[levelName] : '';
      const reset = this.enableColors ? COLORS.RESET : '';
      return `${color}${prefix}${reset} ${message}`;
    } else {
      // Client-side: Browser will handle colors via console methods
      return `${prefix} ${message}`;
    }
  }

  log(level, message, data = null) {
    if (!this.shouldLog(level)) return;

    const levelName = Object.keys(LOG_LEVELS)[level];
    const formattedMessage = this.formatMessage(level, message, data);

    if (this.isServer) {
      // Server-side logging
      console.log(formattedMessage);
      if (data) {
        console.log('Data:', JSON.stringify(data, null, 2));
      }
      
      // Write to file in production
      if (process.env.NODE_ENV === 'production') {
        this.writeToFile(level, message, data);
      }
    } else {
      // Client-side logging with appropriate console methods
      const consoleMethod = this.getConsoleMethod(levelName);
      consoleMethod(formattedMessage);
      if (data) {
        console.log('Data:', data);
      }
    }
  }

  getConsoleMethod(levelName) {
    switch (levelName) {
      case 'DEBUG':
        return console.debug;
      case 'INFO':
        return console.info;
      case 'WARN':
        return console.warn;
      case 'ERROR':
      case 'FATAL':
        return console.error;
      default:
        return console.log;
    }
  }

  async writeToFile(level, message, data) {
    if (this.isServer) {
      try {
        const fs = await import('fs');
        const path = await import('path');
        
        const logDir = path.join(process.cwd(), 'logs');
        const logFile = path.join(logDir, 'app.log');
        
        // Ensure logs directory exists
        if (!fs.existsSync(logDir)) {
          fs.mkdirSync(logDir, { recursive: true });
        }
        
        const timestamp = new Date().toISOString();
        const levelName = Object.keys(LOG_LEVELS)[level];
        const logEntry = {
          timestamp,
          level: levelName,
          message,
          data,
          pid: process.pid
        };
        
        const logLine = JSON.stringify(logEntry) + '\n';
        fs.appendFileSync(logFile, logLine);
      } catch (error) {
        console.error('Failed to write to log file:', error);
      }
    }
  }

  debug(message, data) {
    this.log(LOG_LEVELS.DEBUG, message, data);
  }

  info(message, data) {
    this.log(LOG_LEVELS.INFO, message, data);
  }

  warn(message, data) {
    this.log(LOG_LEVELS.WARN, message, data);
  }

  error(message, data) {
    this.log(LOG_LEVELS.ERROR, message, data);
  }

  fatal(message, data) {
    this.log(LOG_LEVELS.FATAL, message, data);
  }
}

// Create default logger instance
const logger = new Logger({
  level: process.env.LOG_LEVEL ? LOG_LEVELS[process.env.LOG_LEVEL.toUpperCase()] : undefined
});

// Export both the class and default instance
export { Logger, LOG_LEVELS };
export default logger;
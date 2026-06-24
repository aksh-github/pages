

## Nginx



### Enable auth for certain route (e.g. /chat)

1. You need the htpasswd tool to create an encrypted password file.Run the following commands on your server terminal:

```bash
# Install the utility tools if you do not have them
sudo apt-get install apache2-utils   # For Ubuntu/Debian

# Create the password file and add a user (replace 'username' with your choice)
sudo htpasswd -c /etc/nginx/.htpasswd username
```


2. Update Your Nginx Configuration

Open your Nginx server block configuration file (usually located in /etc/nginx/sites-available/ or /etc/nginx/nginx.conf) and add the auth_basic directives inside the /chat location block.

```bash

server {
    listen 80;
    server_name yourdomain.com;

    # Your existing root or proxy setup
    location / {
        # ... existing config ...
    }

    # Target the /chat path specifically
    location /chat {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;

        # Keep your existing application routing below, for example:
        # proxy_pass http://localhost:5000; 
        # proxy_set_header Host $host;
    }
}

```

3. Test and Reload Nginx

Always test your configuration for syntax errors before restarting the service to avoid downtime.

```bash
# Test the configuration
sudo nginx -t

# If successful, reload Nginx to apply changes
sudo systemctl reload nginx
```

> Important Security Note: Basic authentication sends credentials in plain text unless encrypted. Ensure your Nginx server uses HTTPS (SSL/TLS) so users' passwords stay secure over your VPC and the internet.

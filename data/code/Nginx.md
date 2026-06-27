## Nginx

nginx ("engine x") is an HTTP web server, reverse proxy, content cache, load balancer, TCP/UDP proxy server, and mail proxy server.

### Installation

on Ubuntu

Generally its convinient to install nginx directly on host instead of as docker instance. On a typical installation, your config file will be `default` that's stored under `/etc/nginx/sites-available`

> It's always a good practice to take backup of this file before making new changes.

```bash

#Update packages:
sudo apt update

#Install Nginx:
sudo apt install nginx -y

#Allow firewall traffic:
sudo ufw allow 'Nginx Full'

```

**Doing changes to config**

```bash
# Test the configuration
sudo nginx -t

# If successful, reload Nginx to apply changes
sudo systemctl reload nginx
```

#### Enable auth for certain route (e.g. /chat)

1. You need the htpasswd tool to create an encrypted password file.Run the following commands on your server terminal:

```bash
# Install the utility tools if you do not have them
sudo apt-get install apache2-utils   # For Ubuntu/Debian

# Create the password file and add a user (replace 'username' with your choice: e.g. nginxadmin)
sudo htpasswd -c /etc/nginx/.htpasswd username
```

2. Update Your Nginx Configuration

Open your Nginx server block configuration file (usually located in /etc/nginx/sites-available/ or /etc/nginx/nginx.conf) and add the auth_basic directives inside the /chat location block.

> for me settings are under /etc/nginx/sites-available default file. Always make copy of this so we can easily restore.

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

> See the section above.

> Important Security Note: Basic authentication sends credentials in plain text unless encrypted. Ensure your Nginx server uses HTTPS (SSL/TLS) so users' passwords stay secure over your VPC and the internet.

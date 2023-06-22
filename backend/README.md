## Setup flask environment

Flask backend as your API for a React Frontend

___________

### DEVELOPMENT

Run the app, make sure you configs are set in [`.flaskenv`](./.flaskenv)

```bash
python3 -m venv .venv

source .venv/bin/activate

python -m pip install -r requirements.txt

flask --debug run
```

- check [http://0.0.0.0:5000](http://0.0.0.0:5000)

_____________

### DEPLOYMENT ON UBUNTU


#### Systemd for Gunicorn

We setup a service to automatically start the **Gunicorn** flask server
- [configs/flask-react-app.service](./configs/flask-react-app.service)

    >  Apache hosts the ReactJS `npm run build` static files over SSL... you need to configure a `ProxyPass` in your apache config to expose your Flask app. We use [Gunicorn](https://gunicorn.org/) in order to achieve this via a systemd config


    ```bash
    sudo cp configs/flask-react-app.service /etc/systemd/system/flask-react-app.service

    sudo systemctl restart flask-react-app.service
    ```

#### Apache with ProxyPass

We include a sample **Apache** configuration (for dev, not yet prod)
- [configs/local.nxsafelab.org.conf](./configs/local.nxsafelab.org.conf)

    ```bash
    # DEV ONLY!! Setup dummy ssl cert
    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt

    sudo cp configs/local.nxsafelab.org.conf /etc/apache2/sites-available/local.nxsafelab.org.conf

    cd /etc/apache2/sites-available
    sudo a2ensite local.nxsafelab.org.conf

    sudo a2enmod ssl proxy http_proxy

    sudo systemctl restart apache2.service
    ```

    > in production, obviously do not use `/etc/ssl/certs/apache-selfsigned.crt` ...


___________


### NOTES & DEV


> some great information here on saving files securely with Flask: https://flask.palletsprojects.com/en/2.3.x/patterns/fileuploads/
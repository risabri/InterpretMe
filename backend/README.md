# Setup flask environment


```bash
python3 -m venv .venv

source .venv/bin/activate

python -m pip install -r requirements.txt
```

- run the app, make sure you configs are set in [`.flaskenv`](./.flaskenv)

```bash
flask --debug run
```

- check http://localhost:5000


### NOTES & DEV


> some great information here on saving files securely with Flask: https://flask.palletsprojects.com/en/2.3.x/patterns/fileuploads/
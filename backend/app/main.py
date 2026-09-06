from fastapi import FastAPI

app = FastAPI(title="AgroContingency Engine API")

@app.get("/")
def root():
    return {"message": "AgroContingency Engine backend is running"}

@app.get("/farms")
def get_farms():
    return [
        {"id": 1, "name": "Green Valley Farm", "crop": "Soybean", "location": "Bhopal, MP"},
        {"id": 2, "name": "Sunrise Farm", "crop": "Wheat", "location": "Indore, MP"},
    ]
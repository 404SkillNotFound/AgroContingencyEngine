from fastapi import FastAPI
from app.db.database import Base, engine
from app.models.farm import Farm

Base.metadata.create_all(bind=engine)

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
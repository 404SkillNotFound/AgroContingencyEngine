from sqlalchemy import Column, Integer, String
from app.db.database import Base

class Farm(Base):
    __tablename__ = "farms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    crop = Column(String)
    location = Column(String)
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_headers=["*"],
  allow_methods=["*"]
)

@app.get("/")
async def get_():
  print("hello world")
  return {"hello world"}


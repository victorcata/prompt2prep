from fastapi import APIRouter

router = APIRouter()


@router.get("/api/message")
def read_message():
    return {"message": "Hello from FastAPI backend!"}

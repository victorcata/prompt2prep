from fastapi import APIRouter
from app.services.storage import create_session

router = APIRouter()


@router.post('/api/create-session')
def create_session_endpoint():
    session_id = create_session()
    return {'session_id': session_id}

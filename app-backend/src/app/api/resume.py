
from fastapi import APIRouter, Body
from pydantic import BaseModel
from app.services.storage import create_session, save_resume

router = APIRouter()


class ResumeRequest(BaseModel):
    resume: str
    session_id: str


@router.post('/api/upload-resume')
def upload_resume(data: ResumeRequest):
    session_id = data.session_id
    save_resume(session_id, data.resume)
    return {'status': 'received', 'session_id': session_id}

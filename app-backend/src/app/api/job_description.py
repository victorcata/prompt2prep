from fastapi import APIRouter, Body
from pydantic import BaseModel
from app.services.storage import create_session, save_resume

router = APIRouter()


class JobDescriptionRequest(BaseModel):
    job_description: str
    session_id: str = None


@router.post('/api/upload-job-description')
def upload_job_description(data: JobDescriptionRequest):
    session_id = data.session_id
    save_resume(session_id, data.job_description)
    return {'status': 'received', 'length': len(data.job_description)}

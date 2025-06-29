from fastapi import APIRouter, Body
from pydantic import BaseModel

router = APIRouter()


class JobDescriptionRequest(BaseModel):
    job_description: str


@router.post('/api/upload-job-description')
def upload_job_description(data: JobDescriptionRequest):
    return {'status': 'received', 'length': len(data.job_description)}

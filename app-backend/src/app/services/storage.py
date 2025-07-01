import uuid

storage = {}


def create_session():
    session_id = str(uuid.uuid4())
    storage[session_id] = {}
    return session_id


def save_resume(session_id, resume):
    print(f"Saving resume for session {session_id}")
    storage.setdefault(session_id, {})['resume'] = resume
    print(get_data(session_id).get('resume', 'No resume found'))


def save_job_description(session_id, job_description):
    print(f"Saving job description for session {session_id}")
    storage.setdefault(session_id, {})["job_description"] = job_description
    print(get_data(session_id).get('job_description', 'No resume found'))


def get_data(session_id):
    return storage.get(session_id, {})

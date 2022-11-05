import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { ThreadContext } from '../../contexts/ThreadContext'

const AddThreadModal = () => {
	// Contexts
	const {
		showAddThreadModal,
		setShowAddThreadModal,
		addThread,
		setShowToast
	} = useContext(ThreadContext)

	// State
	const [newThread, setNewThread] = useState({
		title: '',
		content: ''
	})

	const { title, content } = newThread

	const onChangeNewThreadForm = event =>
		setNewThread({ ...newThread, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddThreadData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addThread(newThread)
		resetAddThreadData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddThreadData = () => {
		setNewThread({ title: '', content: '' })
		setShowAddThreadModal(false)
	}

	return (
		<Modal show={showAddThreadModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>What do you want to share?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							required
							aria-describedby='title-help'
							value={title}
							onChange={onChangeNewThreadForm}
						/>
						<Form.Text id='title-help' muted>
							Required
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Content'
							name='content'
							value={content}
							onChange={onChangeNewThreadForm}
						/>
					</Form.Group>					
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Cancel
					</Button>
					<Button variant='primary' type='submit'>
						Update!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddThreadModal

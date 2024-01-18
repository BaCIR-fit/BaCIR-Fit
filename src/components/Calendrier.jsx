import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import "../components/Calendrier.css"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Calendrier() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isDejaInscrit, setIsDejaInscrit] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Gere l'evenement
    const handleEventClick = (info) => {
        setSelectedEvent(info.event); // accet aux informations de l'événement cliqué via `info.event`
        setIsDejaInscrit(info.event.extendedProps.isDejaInscrit || false);
        setModalOpen(true);
    };

    // Inscrit ou désincrit l'utilisateur
    const toggleInscription = () => {
        setIsDejaInscrit((isDejaInscrit) => !isDejaInscrit);
    };

    // Gere le modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    
    
    return (
        <Container className="container">
            <FullCalendar
                plugins = { [ timeGridPlugin, interactionPlugin ] }
                initialView = "timeGridWeek" // Vue initiale du calendrier
                locale = "fr" // Langue du calendrier

                // Configuration de la barre d'outils du calendrier
                headerToolbar = { {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'timeGridWeek timeGridDay'
                } }
                
                // Configuration des vues du calendrier
                views = { {
                    timeGrid: {
                        slotDuration: { hours: 1 }, // Durée de chaque intervalle de la timeline
                        allDaySlot: false, // Désactiver la colonne "Toute la journée"
                        
                        // Personnalisation du contenu de l'en-tête de chaque colonne de jour
                        dayHeaderContent: (arg) => {
                            const date = new Date(arg.date);
                            return date.toLocaleDateString('fr-FR', {
                                weekday: 'narrow',
                                day: 'numeric',
                                month: 'numeric'
                            } );
                        },
                    }
                } }
                // Format du titre pour la vue timeGrid
                titleFormat = { {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                } }
                // Liste des événements à afficher sur le calendrier
                events = { [
                    { title: 'Zumba café', start: '2024-01-18T10:00:00', end: '2024-01-18T12:00:00', extendedProps: { isDejaInscrit: false } },
                    { title: 'Aquaponey', start: '2024-01-20T14:00:00', end: '2024-01-20T16:00:00', extendedProps: { isDejaInscrit: false } },
                ] }
                slotMinTime = "07:00:00" // Heure de début des plages horaires
                slotMaxTime = "23:00:00" // Heure de fin des plages horaires
                contentHeight = "auto" // Hauteur du contenu du calendrier
                editable = { false } // Désactivation de la fonction d'édition pour permettre la modification des événements
                eventClick = { handleEventClick } // Ajouter la fonction de rappel pour gérer le clic sur un événement
            />
            
            { selectedEvent && (
                <div>
                    <h2> Détails de l'événement </h2>
                    <p> Titre: {selectedEvent.title} </p>
                    <p>
                        {" "}
                        Début: {selectedEvent.start ? selectedEvent.start.toLocaleString() : ""}
                    </p>
                    <p>
                        {" "}
                        Fin: {selectedEvent.end ? selectedEvent.end.toLocaleString() : ""}{" "}
                    </p>
                    <button onClick = { toggleInscription }> { isDejaInscrit ? "Se désinscrire" : "S'inscrire" } </button>
                </div>
            ) }
            
            <Modal
                open = { modalOpen }
                onClose = { handleCloseModal }
                aria-labelledby = "modal-modal-title"
                aria-describedby = "modal-modal-description"
            >
                <Box className="box">
                    <Typography id = "modal-modal-title" variant = "h6" component = "h2">
                        { selectedEvent ? selectedEvent.title : 'Event Title' }
                    </Typography>

                    <Typography id="modal-modal-description" sx = { { mt: 2 } }>
                        { selectedEvent ? selectedEvent.start?.toLocaleString() : 'Start Time' } - { ' ' }
                        { selectedEvent ? selectedEvent.end?.toLocaleString() : 'End Time' }
                    </Typography>

                    <Button onClick = { toggleInscription }>
                        { isDejaInscrit ? 'Se désinscrire' : "S'inscrire" }
                    </Button>
                </Box>
            </Modal>
        </Container>
    );
}

export default Calendrier
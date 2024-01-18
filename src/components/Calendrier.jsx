import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import "../components/Calendrier.css";


function Calendrier(props){
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
                firstDay={1} // Commence par Lundi

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
                events={props.data}
                slotMinTime = "07:00:00" // Heure de début des plages horaires
                slotMaxTime = "23:00:00" // Heure de fin des plages horaires
                contentHeight = "auto" // Hauteur du contenu du calendrier
                editable = { false } // Désactivation de la fonction d'édition pour permettre la modification des événements
                eventClick = { handleEventClick } // Ajouter la fonction de rappel pour gérer le clic sur un événement
            />
            
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
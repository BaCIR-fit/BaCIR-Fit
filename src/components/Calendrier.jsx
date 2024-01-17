import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Container from '@mui/material/Container';

import "../components/Calendrier.css"


function Calendrier() {
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
                            return date.toLocaleDateString('fr-FR', { weekday: 'narrow', day: 'numeric', month: 'numeric' });
                        },
                    }
                } }
                // Format du titre pour la vue timeGrid
                titleFormat = { { year: 'numeric', month: 'long', day: 'numeric' } }
                
                // Liste des événements à afficher sur le calendrier
                events = { [
                    { title: 'Event 1', start: '2024-01-20T10:00:00', end: '2024-01-20T12:00:00' },
                    { title: 'Event 2', start: '2024-01-20T14:00:00', end: '2024-01-20T16:00:00' },
                ] }
                slotMinTime = "07:00:00" // Heure de début des plages horaires
                slotMaxTime = "23:00:00" // Heure de fin des plages horaires
                contentHeight = "auto" // Hauteur du contenu du calendrier
                editable = { false } // Désactivation de la fonction d'édition pour permettre la modification des événements
                
            />
        </Container>
    );
}

export default Calendrier
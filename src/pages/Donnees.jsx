import React from 'react'

function Donnees() {
    return (
        <section className="max-w-screen-3xl mx-auto relative bg-light dark:bg-basis-90 px-16 xl:px-80 2xl:px-104 py-64 xl:py-104 2xl:py-128">
            <header className="separator-border-bottom mb-48 flex flex-wrap items-center justify-between gap-16 pb-12">
                <section>
                    <h2 className="heading-l text-basis-95 dark:text-light mb-0">Généralités</h2>
                </section>
                <div className="flex flex-col items-center gap-24 md:flex-row" />
            </header>

      <div className="grid grid-cols-1">
        <div>
          <div className="richtext text-balance" style={{ "--font-custom-size": 1 }}>
            <p>
              L’« Alpes Vaudoises, société coopérative » (ci-après dénommée « Alpes Vaudoises »)
              est l'exploitante du site alpesvaudoises.ch et est responsable de la collecte, du
              traitement et de l'utilisation des données personnelles des visiteurs de ce site.
            </p>

            <h3><strong>1 - Responsable pour la protection des données</strong></h3>
            <p>
              La protection de vos données est une préoccupation majeure d‘Alpes Vaudoises.
              Nous respectons les réglementations applicables en matière de protection des données.
            </p>
            <p>
              Alpes Vaudoises, société coopérative, Place du Marché 4, CH-1860 Aigle.
            </p>

            <h3><strong>2 - Coordonnées de la déléguée à la protection des données</strong></h3>
            <p>
              Place du Marché 4, CH-1860 Aigle. E-mail:{" "}
              <a href="mailto:info@alpesvaudoises.ch">info@alpesvaudoises.ch</a>
            </p>

            <h3><strong>3 - Traitement de vos données personnelles</strong></h3>
            <p>Nous recueillons les données suivantes lors de l'inscription :</p>
            <ul className="list-disc pl-6">
              <li>Salutation</li>
              <li>Prénom</li>
              <li>Nom</li>
              <li>Date de naissance</li>
              <li>Mot de passe</li>
              <li>Commandes (services, dates, prix, etc.)</li>
              <li>Numéro de téléphone</li>
              <li>Email</li>
              <li>Adresse (Rue, Code postal, Ville, Pays)</li>
            </ul>

            <h4><strong>3.1 - Paiement des services réservés</strong></h4>
            <p>
              Géré via Datatrans AG, traité par Payyo AG / Trekksoft AG.
            </p>

            <h4><strong>3.2 - Visite du site Internet</strong></h4>
            <ul className="list-disc pl-6">
              <li>Objectif: afficher le site et garantir sa stabilité/sécurité.</li>
              <li>Données: IP, heure, fuseau horaire, page demandée, navigateur, etc.</li>
              <li>Base légale: Intérêt légitime.</li>
              <li>Conservation: pendant votre session.</li>
            </ul>

            <h4><strong>3.3 - Contact via le site</strong></h4>
            <ul className="list-disc pl-6">
              <li>Objectif: répondre aux messages via e-mail/formulaire.</li>
              <li>Base légale: contrat ou intérêt légitime.</li>
              <li>Conservation: jusqu'à réponse ou durée légale.</li>
              <li>Destinataires: sous-traitants.</li>
            </ul>

            <h4><strong>3.4 - Gestion client, comptabilité</strong></h4>
            <ul className="list-disc pl-6">
              <li>Objectif: suivi administratif et juridique.</li>
              <li>Base légale: contrat, obligation légale, intérêt légitime.</li>
              <li>Conservation: durée légale ou jusqu’à résolution du litige.</li>
            </ul>

            <h4><strong>3.5 - Service client et marketing</strong></h4>
            <ul className="list-disc pl-6">
              <li>Objectif: relation client, envoi de newsletters.</li>
              <li>Base légale: consentement, intérêt légitime.</li>
              <li>Conservation: jusqu’à la fin de la relation contractuelle.</li>
            </ul>

            <h4><strong>4 - Vos droits</strong></h4>
            <ul className="list-disc pl-6">
              <li>Droit à l’information</li>
              <li>Rectification / effacement</li>
              <li>Limitation / opposition</li>
              <li>Portabilité</li>
              <li>Révocation de consentement</li>
            </ul>

            <h4><strong>4.4 - Exercice de vos droits</strong></h4>
            <p>
              Contact: Place du Marché 1, CH-1860 Aigle ou{" "}
              <a href="mailto:administration@alpesvaudoises.ch">administration@alpesvaudoises.ch</a>
            </p>

            <h4><strong>4.5 - Plainte</strong></h4>
            <p>
              Vous pouvez contacter l'autorité de surveillance si vous estimez que vos droits ne sont pas respectés.
            </p>

            <h3><strong>5 - Cookies et fournisseurs tiers</strong></h3>
            <h4><strong>5.1 - Cookies</strong></h4>
            <p>
              Utilisation de cookies pour optimiser l’expérience utilisateur. Vous pouvez les désactiver dans les paramètres de votre navigateur.
            </p>

            <h4><strong>5.2 - Google Analytics</strong></h4>
            <p>
              Outil utilisé pour analyser les visites. IP anonymisée. Désactivation possible via:{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>

    );
}

export default Donnees

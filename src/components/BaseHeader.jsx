/**
 * Un composant à un nom commencant par une majuscule
 * Pour plus de clarté utiliser un nom de fichier identique au composant 
 * Utiliser un nom composé.
 */

/**
 * USAGE : Composant pout afficher l'en-tête de l'application. 
 */
function BaseHeader() {
    return (
        <header>
            <h1>Inetum</h1>
        </header>
    )
}

// On exporte par défaut le composant principale du fichier
export default BaseHeader;

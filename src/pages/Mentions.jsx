import React from 'react'

function Mentions() {
    return (
        <section className="max-w-screen-3xl mx-auto relative bg-light dark:bg-basis-90 px-16 xl:px-80 2xl:px-[104px] py-64 xl:py-[104px] 2xl:py-[128px]">

            <div className="grid grid-cols-1 text-balance text-base leading-relaxed space-y-6">
                <h2>Site internet en ligne numérique « https://chauxneuvetourisme.github.io/ »</h2>
                <p><em>Version du 01.01.2025</em></p>

                <h3 className="font-semibold text-lg mt-8">photos :</h3>
                <p>
                toutes les images que nous utilisons sont libres de droit .
                </p>

                <h3 className="font-semibold text-lg mt-8">Développement et Hébergement : moi </h3>
                <p>1 Grande Rue, 25240 Chaux-Neuve - France</p>
                <p>Tél : +33 (0)33 12 45 71 89</p>

                <h3 className="font-semibold text-lg mt-8">Traitement et protection des données :</h3>
                <p>
                    Les données personnelles recueillies sur le site résultent de la communication volontaire d'une adresse de courrier électronique lors de l'envoi d'un formulaire. Les adresses E-mail ainsi recueillies ne servent qu’à transmettre les éléments d’information demandés.
                    Les adresses électroniques collectées ne feront l’objet d’aucune cession à des tiers ni d’aucun traitement de la part du responsable éditorial.
                    La loi "Informatique et Libertés" du 6 janvier 1978 modifiée par la loi du 6 août 2004 encadre la mise en oeuvre des fichiers ou des traitements de données à caractère personnel qu'ils soient automatisés ou manuels. Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent (art. 34 de la loi "Informatique et Libertés"). Vous pouvez l'exercer par mail en le précisant dans le formulaire suivant : Contact / E-Mail.
                </p>

                <h3 className="font-semibold text-lg mt-8">Etablissements de liens - (cross linking ou liens réciproques) :</h3>
                <p>
                    Lien depuis des sites tiers vers ce site autorise la mise en place d’un lien hypertexte depuis n'impote quel site Internet, à l’exclusion de ceux diffusant des informations à caractère polémique, pornographique, xénophobe ou pouvant, dans une plus large mesure porter atteinte à la sensibilité du plus grand nombre.
                </p>
                <p>
                    Le lien doit aboutir à la page d’accueil du site (home page) et le site doit apparaître dans une nouvelle fenêtre. Les pages du site ne doivent en aucun cas être intégrées à l’intérieur des pages d’un autre site (Frame ou iframe). Sauf autorisation spécifique qui pourra être accordée au cas par cas, la technique du lien profond est totalement interdite.
                </p>
                <p>
                    Dans tous les cas, le responsable éditorial se réserve le droit de demander la suppression d’un lien si il estime que le référent (site source) ne respecte pas les règles ainsi définies.
                </p>
                <h5>Lien depuis ce site vers des sites tiers</h5>
                <p>
                    Le responsable éditorial se réserve le droit de "pointer" vers des sites tiers. Accéder à ces liens vous font quitter ce site internet. Les sites cibles ne sont pas sous le contrôle du responsable éditorial de ce site, par conséquent ce dernier n’est pas responsable du contenu de ces sites, des liens qu’ils contiennent ni des changements ou mises à jour qui leur sont apportés.
                </p>

                <h3 className="font-semibold text-lg mt-8">Droits d'auteurs et d'utilisation :</h3>
                <h5>Dispositions légales :</h5>
                <p>
                Le fait d'accéder au site ne donne pas le droit de l'utiliser sans l'accord du responsable éditorial. Toute utilisation des ressources (photographiques, iconographiques, textuelles ou relatives à la forme, la mise en page, la structure...) présentes sur ce site doit faire l'objet d'une demande préalable au responsable éditorial. A titre principal, le responsable éditorial concède une autorisation de visualisation du contenu du site.
                </p>
                <h5>Responsabilité :</h5>
                <p>
                Le responsable éditorial s'efforce de maximiser l'exactitude des informations mais ne peut la garantir ni en établir l'exhaustivité. Il se réserve le droit de modifier, tout ou partie des informations contenues dans les pages de ce site internet, à tout moment et sans notification préalable
                </p>

              {/* You can continue adding the remaining legal sections the same way */}
            </div>
    </section>
    );
}

export default Mentions

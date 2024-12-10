// tableau motmystere
const motMystere = 
    'abandonner,abattre,abri,absence,absolu,absolument,accent,accepter,accompagner,accomplir,accord,' +
    'accorder,accrocher,accuser,acheter,achever,acte,action,admettre,adresser,affaire,affirmer,afin,' +
    'age,agent,agir,agiter,aide,aider,aile,ailleurs,aimer,ainsi,air,ajouter,aller,allumer,alors,ame,' +
    'amener,ami,amour,amuser,ancien,anglais,angoisse,animal,animer,annee,annoncer,apercevoir,' +
    'apparaitre,apparence,appartement,appartenir,appel,appeler,apporter,apprendre,approcher,appuyer,' +
    'apres,arbre,argent,arme,armee,armer,arracher,arreter,arriere,arrivee,arriver,art,article,aspect,' +
    'asseoir,assez,assister,assurer,attacher,attaquer,atteindre,attendre,attention,attirer,attitude,' +
    'aucun,aujourdhui,aupres,auquel,aussi,aussitot,autant,auteur,autorite,autour,autrefois,avance,' +
    'avancer,avant,avec,avenir,aventure,avis,avoir,avouer,baisser,banc,bande,barbe,bas,bataille,battre,' +
    'beau,beaucoup,beaute,besoin,bete,bien,bientot,billet,blanc,bleu,blond,boire,bois,bon,bonheur,' +
    'bord,bouche,bout,branche,bras,briller,briser,bruit,bruler,brusquement,bureau,but,cabinet,cacher,' +
    'calme,calmer,camarade,campagne,capable,caractere,caresser,carte,cas,casser,cause,causer,ceci,' +
    'ceder,cela,celui,cent,centre,cependant,cercle,certain,certainement,cerveau,cesse,cesser,chacun,' +
    'chaine,chair,chaise,chaleur,chambre,champ,chance,changement,changer,chant,chanter,chaque,charge,' +
    'chasser,chat,chaud,chef,chemin,chemise,cher,chercher,cheval,cheveu,chez,chien,chiffre,choisir,' +
    'choix,chose,chute,ciel,cinq,circonstance,clair,classe,clef,coeur,coin,colere,colline,combat,' +
    'combien,commander,commencer,comment,communaute,compagnon,complet,completement,composer,' +
    'comprendre,compte,compter,conclure,condamner,condition,conduire,confiance,confier,confondre,' +
    'connaitre,conscience,conseil,consentir,considerer,construire,consulter,contenter,continuer,' +
    'contraire,contre,convenir,conversation,corde,corps,cote,coucher,couler,couleur,coup,couper,cour,' +
    'courage,courir,course,court,couter,couvrir,craindre,creer,cri,crier,crise,croire,cruel,cuisine,' +
    'curieux,curiosite,danger,dans,davantage,debout,debut,dechirer,decider,declarer,decouvrir,decrire,' +
    'defaut,defendre,deja,demain,demander,demeurer,depart,depasser,deposer,depuis,dernier,detruire,' +
    'devoir,difficulte,difficile,dimanche,dire,direction,disparaitre,disposer,distinguer,divers,docteur,' +
    'dominer,donc,donner,dormir,drame,dresser,droit,durer,eclairer,ecrire,ecraser,effacer,effectuer,' +
    'egal,egalement,elever,eloigner,emmener,emotion,empecher,endormir,enfance,enfant,enfermer,enfin,' +
    'enlever,ensemble,entendre,entier,entrainer,entrer,envelopper,envie,envoyer,epoque,eprouver,' +
    'espace,esperer,espoir,esprit,essayer,etablir,eteindre,etranger,etre,etude,etudier,examiner,' +
    'exercer,exister,expliquer,exposer,exprimer,extraordinaire,face,facile,faim,faire,fatigue,faute,' +
    'femme,fenetre,fer,fermer,fete,feuille,figure,finir,fleur,force,forme,fort,foule,francais,frere,' +
    'gagner,garcon,garder,gauche,gentil,geste,gloire,grandir,guerre,habiller,habitude,haine,herbe,' +
    'histoire,hotel,huit,humain,humilier,impossible,inquiet,inspirer,inventer,isoler,jeune,joie,jour,' +
    'juger,juste,justice,lancer,largement,lecon,leger,lendemain,lettre,lever,lire,lisser,livrer,loger,' +
    'loi,longtemps,loyer,lumiere,lutter,machine,magnifique,maladie,main,maintenant,mal,manquer,' +
    'marche,mariage,marier,masque,matin,mauvais,meilleur,mettre,midi,minute,moindre,mois,monde,' +
    'montagne,mordre,mort,mouvement,mur,musique,nation,nature,naturel,necessaire,nerveux,nombreux,' +
    'nord,notre,nouveau,nuit,obeir,objet,obliger,observer,obtenir,occasion,offrir,oiseau,ombre,' +
    'oncle,ordre,oreille,oser,oublier,ouvrir,page,paraitre,partir,parvenir,pas,passer,pays,paysan,' +
    'peur,peu,phrase,pied,pleurer,pluie,plusieurs,plutot,point,porte,porter,poser,possible,pouvoir,' +
    'precieux,prendre,pres,presenter,presque,prevenir,prier,prince,principes,prison,probleme,produire,' +
    'professeur,proteger,provoquer,propre,puissant,question,quinze,quitter,raison,rappeler,rapidement,' +
    'rarement,recevoir,reconnaitre,reduire,refléchir,refuser,regarder,rejoindre,remplacer,rencontrer,' +
    'rendre,repartir,reposer,reprendre,resembler,rester,retenir,revenir,riche,rien,risquer,robe,roche,' +
    'roi,rompre,rond,rose,rouge,route,rue,ruiner,sable,sac,sang,satisfaire,savoir,secouer,second,semaine,' +
    'sentir,separer,servir,signer,silence,simplement,situation,societe,souffrir,souhaiter,soutenir,' +
    'souvenir,succes,suffire,suivre,sujet,supprimer,surprendre,surveiller,symboliser,table,talent,' +
    'tapis,tard,temps,tenter,terme,terre,tete,tirer,titre,toit,tomber,toucher,toujours,train,traiter,' +
    'tranquille,transformer,travail,travailler,travers,trembler,tres,tromper,trouver,tuer,type,venir,' +
    'vent,veritable,verite,victoire,vie,vieux,village,vin,visage,voir,voiture,volonte,votre,vouloir,' +
    'vrai,vraiment,vraie,vue,yeux';

const motsArray = motMystere.split(',');
const motChoisi = motsArray[Math.floor(Math.random() * motsArray.length)];

// Charger les images du pendu avec le bon chemin relatif
const imagesPendu = [
    'images/pendu7.png',  
    'images/pendu6.png',  
    'images/pendu5.png',  
    'images/pendu4.png', 
    'images/pendu3.png',  
    'images/pendu2.png', 
    'images/pendu1.png',  
    'images/pendu0.png'  
];


let motCache = '';
let erreurs = 0;    
let maxErreurs = 7;
let lettresDevinees = []; 

// Fonction pour initialiser le jeu
function initialiserJeu() {

     // Création des tirets réinitialisation de erreur et lettres devinées
    motCache = "-".repeat(motChoisi.length);  
    erreurs = 0;
    lettresDevinees = []; 
    
    // Le mot caché dans le div motCache
    document.getElementById("motCache").textContent = motCache;

    // Le nombre d'erreurs initial
    document.getElementById("erreurs").textContent = "Erreurs : " + erreurs;

    // l'image initiale du pendu
    document.getElementById("imagePendu").src = imagesPendu[0];

    // Les champs pour entrer des lettres
    document.getElementById("lettreInput").disabled = false;
    document.getElementById("soumettreLettre").disabled = false;

    // Désactiver le bouton Démarrer le jeu
    document.getElementById("demarrerJeu").disabled = true;
}

// Fonction pour vérifier une lettre
function verifierLettre(lettre) {
    if (lettresDevinees.includes(lettre)) {
        alert(`Vous avez déjà deviné la lettre : ${lettre}`);
        return;
    }

    // Ajouter la lettre devinée à la liste
    lettresDevinees.push(lettre);

    if (motChoisi.includes(lettre)) {

        // Mettre à jour le mot caché
        let nouveauMotCache = "";
        for (let i = 0; i < motChoisi.length; i++) {
            if (motChoisi[i] === lettre) {
                nouveauMotCache += lettre;
            } else {
                nouveauMotCache += motCache[i];
            }
        }
        motCache = nouveauMotCache;
        document.getElementById("motCache").textContent = motCache;  

    } else {

        // Incrémenter les erreurs
        erreurs++;
        document.getElementById("erreurs").textContent = `Erreurs : ${erreurs}/${maxErreurs}`;

        // Mettre à jour l'image du pendu
        document.getElementById("imagePendu").src = imagesPendu[erreurs];
    }

    // Vérification si le jeu est terminé
    if (motCache === motChoisi) {
        alert("Félicitations, vous avez trouvé le mot !");
        terminerJeu();
    } else if (erreurs >= maxErreurs) {
        alert("Perdu. Le mot était : " + motChoisi);
        terminerJeu();
    }
}

// Fonction pour terminer le jeu
function terminerJeu() {
    document.getElementById("lettreInput").disabled = true;
    document.getElementById("soumettreLettre").disabled = true;
    document.getElementById("demarrerJeu").disabled = false; 
}

// Gestion du bouton Démarrer le jeu
document.getElementById("demarrerJeu").addEventListener("click", initialiserJeu);

// Gestion de la soumission des lettres
document.getElementById("soumettreLettre").addEventListener("click", function() {
    const lettre = document.getElementById("lettreInput").value.toLowerCase();
    document.getElementById("lettreInput").value = "";  
    if (lettre) {
        verifierLettre(lettre)
    }
});

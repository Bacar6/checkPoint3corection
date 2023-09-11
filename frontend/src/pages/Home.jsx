import { Link } from "react-router-dom";

import compassImage from "../assets/compass.png";
import jackImage from "../assets/jack.gif";
import sparrowImage from "../assets/sparrow.jpg";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Checkpoint 3</h1>
        <div className="row introduction">
          <div className="col-sm-9">
            <p>
              Le pirate le plus célèbre au monde, le grand et inimitable
              Capitaine Jack Sparrow, recherche le trésor perdu de Rackham le
              Rouge, un vieux pirate impitoyable qui semait la terreur parmi les
              mers des Caraïbes, il y a très longtemps.
            </p>
            <p>
              Un vieux marin du Royaume de France, le Capitaine Haddock, a donné
              à Jack une carte mystérieuse avec de nombreuses îles dessus.
              Haddock savait seulement que le trésor était enterré sur l'une de
              ces îles. Jack et son équipage ont pour mission de naviguer vers
              chacune d'entre elles, jusqu'à ce qu'ils trouvent les pièces d'or
              et les pierres précieuses qui constituent le trésor caché.
            </p>
          </div>
          <div className="col-sm-3">
            <img className="sparrow" src={sparrowImage} alt="Jack Sparrow" />
          </div>
          <div className="col-sm-12 text-center">
            <img className="compass" src={compassImage} alt="compass" />
          </div>
          <div className="col-sm-12">
            <p>
              Prenez le contrôle du Black Perl, le magnifique navire de Jack, et
              naviguez parmi les océans. Évitez les krakens, les tempêtes ou
              d'autres pirates et soyez les premiers à trouver le trésor ! Il
              est temps de finir votre dernière bouteille de rhum et de
              commencer cette aventure !
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid deep-sea">
        <div className="row">
          <div className="col-sm-12">
            <h2>Votre mission</h2>
            <ol className="instructions">
              <li>
                <p>
                  Bonjour, membre d'équipage,{" "}
                  <strong>
                    lisez attentivement les instructions ci-dessous{" "}
                  </strong>{" "}
                  avant de commencer à coder ;)
                </p>
                <p>
                  Chaque étape est relativement indépendante, n'hésitez pas à
                  passer à la suivante si vous restez bloqué trop longtemps sur
                  une étape. De plus, n'oubliez pas que vous pouvez demander de
                  l'aide à votre formateur ;)
                </p>
                <p>
                  Vous devez pousser votre code sur le dépôt de projet, avec
                  votre nom et prénom en tant que nom de branche (par exemple,
                  SPARROW_JACK). De plus, pensez à faire des commits atomiques !
                </p>
              </li>

              <li>
                <p>
                  Jack aime écouter de la musique tout en naviguant. Il souhaite
                  créer sa propre application pour gérer les albums et les
                  pistes. Aidez-le en créant le diagramme de conception d'entité
                  (MCD) pour les fonctionnalités suivantes :
                </p>
                <p>
                  Le MCD que vous allez créer à cette étape ne sera pas utilisé
                  par la suite. Il vous permettra cependant d'évaluer votre
                  capacité à concevoir une base de données.
                </p>
                <ul>
                  <li>
                    Jack doit être capable de récupérer la liste complète des
                    albums.
                  </li>
                  <li>
                    Chaque album a un titre, un genre, une image et un artiste.
                  </li>
                  <li>
                    Un album peut contenir plusieurs pistes, mais doit en
                    contenir au moins une.
                  </li>
                  <li>Une piste appartient à un seul et unique album.</li>
                  <li>Chaque piste a un titre et une URL YouTube.</li>
                </ul>
                <p>
                  Sauvegardez une image de votre diagramme dans le repository
                  git.
                </p>
              </li>

              <li>
                <p>
                  Avant de commencer, il faut noter que vous n'aurez aucune
                  action à faire dans le dossier frontend. Il récupèra le
                  résultat <strong> des routes</strong> que vous allez créer. Il
                  est donc important de les nommer exactement comme dans
                  l'exercice.
                </p>
                <p>
                  Regardez la barre de navigation, il y a un lien vers la carte{" "}
                  <Link to="/map">Map</Link>. Les bateaux peuvent naviguer sur
                  cette carte, qui est construite avec des tuiles. Sauf que pour
                  l'instant, la carte ne montre ni les bateaux ni les tuiles.
                  Dans un premier temps, créez 2 routes dans le fichier{" "}
                  <code>backend/src/router.js</code>:
                </p>
                <ul>
                  <li>
                    <code>GET /tiles</code>: cette route doit faire appel à un
                    contrôleur qui lui-même fera appel à un modèle pour
                    récupérer les informations dans la base de données, plus
                    précisément dans la table "tile". Ensuite, le contrôleur
                    renverra le tout au front au format JSON.
                  </li>
                  <li>
                    <code>GET /boats</code>: cette route doit faire appel à un
                    contrôleur qui lui-même fera appel à un modèle pour
                    récupérer les informations dans la base de données, plus
                    précisément dans la table "boat". Ensuite, le contrôleur
                    renverra le tout au front au format JSON.
                  </li>
                </ul>
                <p>pour voir le resulta attendu regarder la video ex01</p>
              </li>

              <li>
                <p>
                  Vous l'aurez deviné, nous sommes seulement intéressés par un
                  seul bateau, le Black Pearl. Votre mission consiste donc à
                  créer une méthode <code>findByName(name)</code> dans le
                  fichier <code>backend/src/models/BoatManager.js</code>. Cette
                  méthode doit sélectionner uniquement le bateau avec le nom
                  passé en paramètre.
                </p>
                <p>
                  Vous n'avez rien à faire dans le dossier <code>frontend</code>
                  . Il demande déjà par défaut, via une requête effectuée avec{" "}
                  <code>axios</code>, le nom du bateau Black Pearl à l'adresse{" "}
                  <code>/boats?name=Black Pearl</code> Modifiez simplement votre
                  route <code>GET /boats</code> dans le backend pour que le
                  contrôleur appelle votre méthode <code>findByName</code>.
                </p>
                <p>pour voir le resulta attendu regarder la video ex02</p>

                <details>
                  <summary className="hint">Astuce: </summary>Essayez de faire
                  un <code>console.warn</code> de la valeur de{" "}
                  <code>req.query</code> dans le handler de votre route.
                </details>
              </li>

              <li>
                <p>
                  Créez une route pour mettre à jour la position du bateau sur
                  la carte : celle-ci sera reliée par les liens N/S/E/W à côté
                  de la carte. Encore une fois, rien à faire du côté frontend :
                  les liens sont déjà fonctionnels et attendent que vous créiez
                  la route de mise à jour dans le backend. Voici un exemple de
                  requête que votre route devrait être capable de gérer :
                </p>
                <blockquote>
                  <code>
                    PUT /boats/42
                    <br />
                    Content-type: application/json
                    <br />
                    <br />
                    {"{"} "coord_x": 5, "coord_y": 6 {"}"}
                  </code>
                </blockquote>
                <p>pour voir le resulta attendu regarder la video ex03</p>

                <details>
                  <summary className="hint">Astuce: </summary>Votre route doit
                  être déclarée en utilisant le verbe PUT et le chemin{" "}
                  <code>"/boats/:id"</code>.
                </details>
                <details>
                  <summary className="hint">Astuce 2 : </summary>Vous pouvez
                  récupérer l'ID via <code>req.params</code> et les coordonnées
                  via <code>req.body</code>.
                </details>
              </li>

              <li>
                <p>
                  Actuellement, si vous déplacez votre bateau vers une tuile
                  inexistante, le bateau disparaît simplement et il n'y a aucun
                  message d'erreur. Pour éviter que Jack ne se perde, vous
                  devrez empêcher le déplacement en dehors de la carte. Créez un
                  fichier <code>tileExists.js</code> dans le dossier{" "}
                  <code>backend/src/services</code>. Le fichier devra exporter
                  un middleware (il prend <code>req</code>, <code>res</code> et{" "}
                  <code>next</code> en arguments). Il devra vérifier si une
                  tuile existe ou non dans la base de données avec les
                  coordonnées (<code>req.body.coord_x</code> et{" "}
                  <code>req.body.coord_y</code>). Si la tuile existe, continuez
                  vers le middleware suivant <code>next()</code>. Si la tuile
                  n'existe pas, renvoyez un statut d'erreur (422). Utilisez ce
                  nouveau middleware dans la route PUT{" "}
                  <code>PUT /boats/:id</code> , pour empêcher le bateau de se
                  déplacer si la tuile de destination n'existe pas.
                </p>
                <p>pour voir le resulta attendu regarder la video ex04</p>

                <details>
                  <summary className="hint">Astuce: </summary>Utilisez le
                  TileManager dans votre middleware. Vous devez ajouter une
                  méthode à TileManager pour pouvoir verifier que les
                  coordonnées existe dans votre base de donner.
                </details>
                <details>
                  <summary className="hint">Astuce 2: </summary> Si vous avez
                  des difficultés à utiliser TileManager, vous pouvez vérifier
                  que la coordonnée X se situe entre 0 et 11 (inclus) et que la
                  coordonnée Y se situe entre 0 et 5 (inclus) en dehors du
                  serveur.
                </details>
              </li>

              <li>
                <p>
                  Sur la page de la carte, dans le panneau d'
                  <em>information</em>, vous devriez voir les coordonnées du
                  bateau. Modifiez la requête SQL dans votre méthode{" "}
                  <code>findByName</code> pour qu'elle vous donne le type de
                  tuiles sur laquelle votre bateau est positionné, soit une
                  tuile de type 'sea','port' ou de type 'island'.
                </p>
                <p>
                  Une fois que votre demande sera mise à jour, vous devriez voir
                  le type de la tuile située sous le Black Pearl dans le panneau
                  d'informations de la page carte.
                </p>
                <p>pour voir le resulta attendu regarder la video ex05</p>

                <details>
                  <summary className="hint">Astuce: </summary>Vous devriez
                  utiliser une{" "}
                  <a href="https://stackoverflow.com/questions/16597660/sql-join-on-multiple-columns-in-same-tables">
                    jointure sur plusieurs colonnes
                  </a>
                  . Assurez-vous de Select explicitement l'<code>id</code>, les{" "}
                  <code>coords</code> et le <code>name</code> du bateau.
                </details>
                <details>
                  <summary className="hint">Astuce 2: </summary>Join on{" "}
                  <code>coord_x</code> AND <code>coord_y</code>.
                </details>
              </li>

              <li>
                <p>
                  Ajoutez la propriété <code>has_treasure</code> (un booléen) à
                  l'entité <code>tile</code>. Elle ne poura pas etre{" "}
                  <code>null</code> et la valeur par défaut sera{" "}
                  <code>false</code>. Elle permettra de savoir si le trésor est
                  sur une tuile ou non. N'oubliez pas d'utiliser la commande{" "}
                  <code>npm migrate</code> pour mettre à jour votre base de
                  données.
                  <p>
                    Vous devrait peut-être modifier la méthode{" "}
                    <code>findByName</code> pour allez chercher dans la base de
                    données le champ <code>has_treasure</code>{" "}
                  </p>
                  <p>
                    {" "}
                    Vous n'avez rien à faire dans le dossier{" "}
                    <code>frontend</code>.{" "}
                  </p>
                  <p>pour voir le resulta attendu regarder la video ex06</p>
                </p>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Create a <code>POST /games</code>{" "}
                  route to start a new game. This means:
                </p>
                <ul>
                  <li>
                    Putting back the Pearl to its original position (1, 1).
                  </li>
                  <li>
                    Reset <code>has_treasure</code> to <em>false</em> on every
                    tile.
                  </li>
                  <li>Hide the treasure on a random island.</li>
                  <li>Send back status 201 when everything is done.</li>
                </ul>
                <p>
                  When ready to play, hit the <em>Start</em> button in the
                  navigation bar.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Add a method{" "}
                  <code>hideTreasure</code> in TileManager. You may use{" "}
                  <a href="https://thewebdev.info/2022/03/05/how-to-run-multiple-statements-in-one-query-with-node-mysql/">
                    multiple update statements separated with a semicolon
                  </a>{" "}
                  in your query ;)
                </details>
                <details>
                  <summary className="hint">Hint2: </summary>Look at{" "}
                  <a href="https://www.petefreitag.com/item/466.cfm">
                    "SQL to Select a random row from a database table"
                  </a>
                  .
                </details>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Create a winning page, and redirect
                  to it when Jack finds the treasure.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Sorry, not on this
                  one :p
                </details>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Improve the style of the Information
                  panel and of the NSEW links.
                </p>
              </li>
            </ol>
            <blockquote>Good luck !</blockquote>
          </div>

          <div className="col-sm-12 text-center">
            <img src={jackImage} alt="Good Luck!" />
          </div>
        </div>
      </div>
    </>
  );
}

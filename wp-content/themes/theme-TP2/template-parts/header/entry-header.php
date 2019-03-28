<?php
/**
 * Displays the post header
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

$discussion = ! is_page() && twentynineteen_can_show_post_thumbnail() ? twentynineteen_get_discussion_data() : null; ?>

<?php the_title( '<h1 class="entry-title">', '</h1>' ); 

$sTitre = the_title('','', false);
 $lesCours = array(
    "TIM-528 Création 3D-3"=>array("
    Grégory Bony
","45 heures"),
    "TIM-535 Gestion d’un projet multimédia"=>array("45 heures","
    Eddy Martin
"),
    "TIM-552 Développement de jeu"=>array("75 heures","
    Dominic Girard
    Vahik Toroussian
    Mathieu Dionne
"),
    "TIM-554 Production Web"=>array("75 heures","
    Eddy Martin
    Xavier Marchand
    Caroline Martin
"),
    "TIM-629 Création vidéo 2"=>array("45 heures","
    Denis Pellerin
    Martin St-Pierre
"),
    "TIM-636 Projet de fin d’études"=>array("75 heures","
    Johanne Massé
"),
    "TIM-640 Programmation et veille technologique"=>array("60 heures","Eddy Martin"),
    "TIM-655 Stage en milieu de travail"=>array("210 heures",""),
    "TIM-447 Assemblage de jeu"=>array("75 heures","
    Vahik Toroussian
    Mathieu Dionne
"),
    "TIM-434 Scénarisation"=>array("45 heures","
    Grégory Bony
    Denis Pellerin
"),
    "TIM-427 Conception sonore"=>array("45 heures","Martin St-Pierre"),
    "TIM-426 Création 3D-2"=>array("45 heures","Grégory Bony"),
    "TIM-346 Programmation Web 2"=>array("60 heures","
    Caroline Martin
    Camille Semaan
"),
    "TIM-345 Programmation d’animation 2"=>array("60 heures","Johanne Massé"),
    "TIM-344 Éléments médiatiques et Bases de données"=>array("60 heures","Camille Semaan"),
    "TIM-333 Design d’interfaces"=>array("60 heures","Dominic Girard"),
    "TIM-325 Création vidéo 1"=>array("45 heures","
    Denis Pellerin
    Martin St-Pierre
"),
    "TIM-324 Création 3D-1"=>array("45 heures","Grégory Bony"),
    "TIM-243 Programmation Web 1"=>array("60 heures","
    Vincent LeBlanc
    Camille Semaan
"),
    "TIM-242 Programmation d’animation 1"=>array("45 heures","Dominic Girard"),
    "TIM-232 Design graphique 2"=>array("",""),
    "TIM-223 Image numérique 2"=>array("60 heures","
    Denis Pellerin
    Xavier Marchand
    David Ross
"),
    "TIM-151 Création web"=>array("60 heures","Eddy Martin"),
    "TIM-131 Design graphique 1"=>array("45 heures","
    Denis Pellerin
    Vincent LeBlanc
"),
    "TIM-122 Image numérique 1"=>array("60 heures","Denis Pellerin"),
    "TIM-121 Animation"=>array("45 heures","Martin St-Pierre"),
    "TIM-111 Environnement professionnel"=>array("45 heures
",""));    

echo '<b> Nombre d\'heures:</b> '.$lesCours[$sTitre][0]."<br/>";
echo '<b> Enseigné par:</b> '.$lesCours[$sTitre][1];
?>


<?php if ( ! is_page() ) : ?>
<div class="entry-meta">
	<?php twentynineteen_posted_by(); ?>
	<?php twentynineteen_posted_on(); ?>
	<span class="comment-count">
		<?php
		if ( ! empty( $discussion ) ) {
			twentynineteen_discussion_avatars_list( $discussion->authors );
		}
		?>
		<?php twentynineteen_comment_count(); ?>
	</span>
	<?php
	// Edit post link.
		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers. */
					__( 'Edit <span class="screen-reader-text">%s</span>', 'twentynineteen' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			),
			'<span class="edit-link">' . twentynineteen_get_icon_svg( 'edit', 16 ),
			'</span>'
		);
	?>
</div><!-- .meta-info -->
<?php endif; ?>

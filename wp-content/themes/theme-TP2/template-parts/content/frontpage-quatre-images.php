<?php
/**
 * Template part pour afficher les catégories du front-page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
?>

<div class="wp-block-column">
	<figure class="wp-block-image">
	 

	<?php 
//	the_post_thumbnail(''); 
	$image = get_field('mon_image');
            
	$size = 'medium'; // (thumbnail, medium, large, full or custom size)
	if( $image ) {
		echo wp_get_attachment_image( $image, $size );
	}
  
		
	// add_post_meta($post_id, '_thumbnail_id', $attachment_id);
	
	?>
	   
		<a href="<?php the_permalink(); ?>"><?php the_title(); ?>
		<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
	</figcaption>
	</figure>
</div>
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
 
import { __ } from '@wordpress/i18n';
import { 
	InnerBlocks,
	useBlockProps, 
	RichText ,
	AlignmentControl, 
	BlockControls
}
from '@wordpress/block-editor';
	
	
	
import { useState } from 'react';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	
	const {style} = attributes
	return (
		<div { ...blockProps }> 

			<InnerBlocks.Content />
		</div>
	);
}
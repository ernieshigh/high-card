/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
 
import { __ } from '@wordpress/i18n';
import { useBlockProps, 
	RichText ,
	AlignmentControl, 
	BlockControls, 
	PlainText,
	MediaUploadCheck, 
	MediaUpload  }
from '@wordpress/block-editor';
	
	
import { useState } from 'react';
import { 
	__experimentalDimensionControl as DimensionControl,
	Button
	}
from '@wordpress/components';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	
	const { content, title, align, style, imageId, imageUrl} = attributes
	return (
		<div { ...blockProps }> 
			{
				imageUrl && (
                    <img className="cardImage" src={imageUrl } />
                )
            }
			<RichText.Content  
				tagName="h2"
				value={ attributes.title} 
				style={ { textAlign: attributes.align } }
			/>
			<RichText.Content  
				tagName="p"  
			value={ attributes.content } 
			style={ { textAlign: attributes.align } }
			/>
		</div>
	);
}
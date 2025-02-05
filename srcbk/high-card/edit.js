/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( {attributes, className, setAttributes} ) {
		
		
	const blockProps = useBlockProps();	
	const { content, align, style, imageId, imageUrl, title} = attributes
	
	const onChangeContent = ( newContent ) => {
		setAttributes( { content: newContent } )
	}
	
	const onChangeAlign = ( newAlign ) => {
		setAttributes( { 
			align: newAlign === undefined ? 'none' : newAlign, 
		} )
	} 
	
	const onChangeTitle = (newTitle) => {
		setAttributes({
			title: newTitle
			}) 
	}
	return (
	<>
		<BlockControls>
			<AlignmentControl
				value={ attributes.align }
				onChange={ onChangeAlign }
			/>
		</BlockControls>
		
		<div { ...blockProps } className="container"> 
		
		<MediaUploadCheck>
				<MediaUpload
					onSelect={ ( media ) => {
						setAttributes( {
							imageId: media.id,
							imageUrl: media.url,
						} );
					} }
					title={ __( 'Select an Avatar', 'dlx-avatar-sample-block' ) }
					mode={ 'upload' }
					multiple={ false }
					allowedTypes={ [ 'image' ] }
					value={ imageId }
					render={ ( { open } ) => (
						<>
							<Button
								variant="secondary"
								onClick={ () => {
									open();
								} }
							>
								{ __( 'Upload Avatar', 'dlx-avatar-sample-block' ) }
							</Button>
							{
								imageUrl && (
									<img
										src={ imageUrl }
										style={{
											display: 'block',
											maxWidth: '250px',
											height: 'auto',
										}}
									/>
								)
							}
						</>
					) }
				/>
			</MediaUploadCheck>
			 <RichText 
				tagName="h2"
				onChange={ onChangeTitle }
				value={ attributes.title }
				placeholder="Your card title"
				className="heading"
			 />
			 <RichText
				tagName="p"
				onChange={ onChangeContent }
				allowedFormats={ [ 'core/bold', 'core/italic' ] }
				value={ attributes.content }
				placeholder="Your card text"
			style={ { textAlign: attributes.align } }
			 />
		</div>
	</>
	);
}

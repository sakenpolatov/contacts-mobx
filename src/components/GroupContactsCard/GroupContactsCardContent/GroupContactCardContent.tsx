import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../../PlaceholderImage'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import styles from '../groupContactsCard.module.scss'

interface GroupContactsCardContentProps {
	selectedGroup: GroupContactsDto
	withLink?: boolean
}

export const GroupContactsCardContent = ({
	selectedGroup,
	withLink
}: GroupContactsCardContentProps) => {
	const { id, name, description, photo, contactIds } = selectedGroup

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				{withLink ? (
					<Link to={`/groups/${id}`} className={styles.link}>
						{name}
					</Link>
				) : (
					<span>{name}</span>
				)}
			</div>
			<div className={styles.info}>
				{photo ? (
					<img className={styles.img} src={photo} alt={name} />
				) : (
					<div className={styles.noImage}>
						<PlaceholderImage />
					</div>
				)}
				<div className={styles.rightSection}>
					<div className={styles.body}>{description}</div>
					<div className={styles.footer}>
						Контактов в группе: {contactIds.length}
					</div>
				</div>
			</div>
		</div>
	)
}

{
	mainmenu: {
		$items_size: 12,
		items: [
			{
				label: 'ראשי',
				link: '/he',
				new_window: false,
				$label_en: 'Home',
				$link_en: '/en'
			},
			{
				label: 'אודות',
				link: '/he/about',
				new_window: false,
				$link_en: '/en/about',
				$label_en: 'About'
			},
			{
				label: 'עבודות',
				link: '/he/portfolio',
				new_window: false,
				is_parent: true,
				child: [
					{
						icon: '/remote/direct_uploads/1518398006_desktop-smartphone.png',
						$icon_type: 'image',
						label: 'עיצוב אתרים',
						link: '/he/portfolio/web-design-uix',
						new_window: false,
						$label_en: 'Web design',
						$link_en: '/en/portfolio/web-design-uix'
					},
					{
						icon: '/remote/direct_uploads/1518398045_vector-clipboard.png',
						$icon_type: 'image',
						label: 'עיצוב גרפי',
						link: '/he/portfolio/graphic-design',
						new_window: false,
						$label_en: 'Graphic design',
						$link_en: '/en/portfolio/graphic-design'
					}
				],
				$label_en: 'Portfolio',
				$link_en: '/en/portfolio'
			},
			{
				label: 'התמחויות',
				link: '/he/services-page-list',
				new_window: false,
				is_service: true,
				$label_en: 'Services',
				$link_en: '/en/services-page-list',
				$services_list_size: 12,
				services_list: [
					{
						label: 'אינטרנט',
						language: 'he',
						parent_slug: 'internet',
						topics: [
							{
								icon: '/remote/direct_uploads/1517615154_laptop_icon.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015888_responsive-web-design-uix-clean-design-hr-siton.jpg',
								$image_type: 'image',
								label: 'עיצוב אתרים',
								$label_en: 'Web Design',
								page_slug: 'web-design'
							},
							{
								icon: '/remote/direct_uploads/1517615681_focus.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015931_ui-design-learning-software-hr-siton.jpg',
								$image_type: 'image',
								label: 'עיצוב UIX',
								$label_en: 'User Experience Design',
								page_slug: 'user-experience-design'
							},
							{
								icon: '/remote/direct_uploads/1517615016_code.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015911_web-development-frontend-code-writing.jpg',
								$image_type: 'image',
								label: 'פיתוח אתרים',
								$label_en: 'Web Development',
								page_slug: 'web-development'
							},
							{
								icon: '/remote/direct_uploads/1517614967_phone.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015861_app-design-offcanvas-menu-design-siton.jpg',
								$image_type: 'image',
								label: 'עיצוב למובייל',
								$label_en: 'Mobile Websites',
								page_slug: 'mobile-sites'
							},
							{
								icon: '/remote/direct_uploads/1517615317_uikit-framework-icon.png',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518016089_uikit-frondend-framework.jpg',
								$image_type: 'image',
								label: 'UIkit',
								$label_en: 'UIKIT',
								page_slug: 'uikit',
								$page_slug_en: 'uikit'
							}
						],
						$label_en: 'Internet',
						$language_en: 'en'
					},
					{
						label: 'מערכות לבניית אתרים',
						language: 'he',
						parent_slug: 'website-builder',
						topics: [
							{
								icon: '/remote/direct_uploads/1517614698_webflow-logo-icon.png',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518016112_webflow_screenshot_site-builder.jpg',
								$image_type: 'image',
								label: 'Webflow',
								$label_en: 'Webflow',
								page_slug: 'webflow'
							},
							{
								icon: '/remote/direct_uploads/1517614881_elementor-icon.png',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518016102_elementor_site_builder_dashboard.jpg',
								$image_type: 'image',
								label: 'Elementor Wordpress',
								$label_en: 'Elementor Wordpress',
								page_slug: 'elementor-wordpress'
							},
							{
								icon: '/remote/direct_uploads/1517614892_wix-icon.ico',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015707_wix-dashboard_screenshot.jpg',
								$image_type: 'image',
								label: 'WIX',
								$label_en: 'WIX',
								page_slug: 'wix'
							}
						],
						$label_en: 'Website Builders',
						$language_en: 'en'
					},
					{
						label: 'פרינט',
						parent_slug: 'print',
						language: 'he',
						topics: [
							{
								icon: '/remote/direct_uploads/1517615532_paint-bucket-39.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518016320_graphic-design-category.jpg',
								$image_type: 'image',
								label: 'עיצוב גרפי',
								$label_en: 'Graphic Design',
								page_slug: 'graphic-design'
							},
							{
								icon: '/remote/direct_uploads/1517615524_vector.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518016248_logo-design_category.jpg',
								$image_type: 'image',
								label: 'לוגו וזהות מותגית',
								$label_en: 'Logo & Brand Identity',
								page_slug: 'logo-and-brand-identity'
							}
						],
						$label_en: 'Print',
						$language_en: 'en'
					},
					{
						label: 'קמפיין דיגיטלי',
						parent_slug: 'digital-marketing-campaign',
						language: 'he',
						topics: [
							{
								icon: '/remote/direct_uploads/1517615425_cursor-49.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015850_banner_category.jpg',
								$image_type: 'image',
								label: 'עיצוב באנרים',
								$label_en: 'Banner Ads',
								page_slug: 'banner-ads'
							},
							{
								icon: '/remote/direct_uploads/1517615419_sidebar.svg',
								$icon_type: 'image',
								image: '/remote/direct_uploads/1518015031_landingpage-clean-design-siton.jpg',
								$image_type: 'image',
								label: 'דפי נחיתה',
								$label_en: 'Landing Pages',
								page_slug: 'landing-pages'
							}
						],
						$label_en: 'Digital Marketing Campaign',
						$language_en: 'en'
					}
				]
			},
			{
				label: 'צור קשר',
				link: '/he/contact',
				new_window: false,
				$link_en: '/en/contact',
				$label_en: 'Contact'
			}
		]
	},
	meta: {
		last_edited: 1511365722
	}
}

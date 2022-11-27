function menu(sw)
{
	var c = document.getElementById("content");
	
	var num = sw;
	if(num == 0)
	{
		c.innerHTML = "<main><article><header><h3>Home</h3></header><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
	}
	else if(num == 1)
	{
		// c.innerHTML = "<embed width='100%' height='655px' src='strona glowna.html'>"
		c.innerHTML = "<main><article><header><h3>About Me</h3></header><p>Nulla tristique cursus ipsum, vitae vulputate massa. Cras auctor libero eu ultrices ornare. Donec blandit consequat neque vel dignissim. Curabitur sed erat at lorem pellentesque sollicitudin eget id enim. Maecenas pharetra placerat velit, vitae eleifend augue faucibus eu. Vivamus non mauris aliquet leo dapibus consectetur. Phasellus sed auctor ipsum. Sed et augue vitae augue tempor luctus. Integer pharetra sodales eros, ac elementum nisi dapibus nec. Sed eget velit quis elit eleifend ultricies.</p></article></main>"
	}
	else if(num == 2)
	{
		c.innerHTML = "<main><article><header><h3>Portfolio</h3></header><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> \
		\
		<p>Duis tristique tempor nunc vitae accumsan. Aliquam dignissim vestibulum augue, in vulputate ipsum vulputate ac. Phasellus ultricies felis in dictum feugiat. Nunc at hendrerit justo. Fusce quam ex, blandit non lacus id, egestas tincidunt purus. Etiam nec arcu eget sem ornare porta vitae ornare nulla. Duis sit amet pharetra nunc. Pellentesque vulputate leo dolor, ut sodales dolor condimentum ac. Donec id semper dui.</p></article></main>"
	}
	else
	{
		c.innerHTML = "<main><article><header><h3>Contact</h3></header><p>Nulla tristique cursus ipsum, vitae vulputate massa. Cras auctor libero eu ultrices ornare. Donec blandit consequat neque vel dignissim. Curabitur sed erat at lorem pellentesque sollicitudin eget id enim. Maecenas pharetra placerat velit, vitae eleifend augue faucibus eu. Vivamus non mauris aliquet leo dapibus consectetur. Phasellus sed auctor ipsum. Sed et augue vitae augue tempor luctus. Integer pharetra sodales eros, ac elementum nisi dapibus nec. Sed eget velit quis elit eleifend ultricies.</p></article></main>"
	}
}
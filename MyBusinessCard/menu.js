function menu(sw)
{
	var c = document.getElementById("content");
	
	var num = sw;
	if(num == 0)
	{
		c.innerHTML = "<main><article><header><h3>Simply&Good Website For You!?</h3></header><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\
		\
		<p>Mauris at iaculis mauris. Integer gravida libero turpis, quis commodo libero auctor accumsan. Integer volutpat tellus id ornare suscipit. Fusce rutrum magna vel blandit aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae varius tortor. Pellentesque scelerisque semper lorem eget maximus. Donec non libero orci. Sed volutpat enim eget risus luctus eleifend. Donec ac auctor sapien. Fusce vestibulum ligula non nulla semper, at consectetur neque fringilla. Aenean ac varius libero, nec convallis nisl. Fusce eget placerat diam. Maecenas in libero risus.</p>\</article></main>"
	}
	else if(num == 1)
	{
		c.innerHTML = '<main><article><header><h3>Who I am?</h3></header><img src="img.jpg" width="300" height="220" style="float: right;"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel ipsum fringilla, porttitor odio ut, consequat mauris. Nunc imperdiet, leo eget condimentum mattis, sem massa mattis justo, sit amet condimentum felis sapien laoreet enim. Fusce rutrum quam in ultrices commodo. Vivamus et odio laoreet, elementum enim sed, volutpat est. Fusce in nisi in ligula aliquet tincidunt et sed sapien. Donec a velit rutrum ipsum molestie elementum sit amet sed ex. Mauris tincidunt vestibulum sem, in ultrices est. Quisque porta ligula vel ullamcorper egestas. Duis ac libero nec augue auctor sagittis. Nullam lorem mi, mollis ut orci quis, rhoncus accumsan nisl. In dictum viverra nunc vel luctus.</p>\
		\
		<p>Nulla tristique cursus ipsum, vitae vulputate massa. Cras auctor libero eu ultrices ornare. Donec blandit consequat neque vel dignissim. Curabitur sed erat at lorem pellentesque sollicitudin eget id enim. Maecenas pharetra placerat velit, vitae eleifend augue faucibus eu. Vivamus non mauris aliquet leo dapibus consectetur. Phasellus sed auctor ipsum. Sed et augue vitae augue tempor luctus. Integer pharetra sodales eros, ac elementum nisi dapibus nec. Sed eget velit quis elit eleifend ultricies.</p>\
		\
		<p>Suspendisse eget tortor gravida, ullamcorper felis viverra, scelerisque metus. Nunc eleifend auctor auctor. Vivamus lobortis dui ligula. Donec volutpat placerat dictum. Nulla semper rutrum consequat. Mauris ut tortor eget turpis mattis elementum. In sodales vehicula efficitur. Proin non convallis nulla. Maecenas auctor, mauris at placerat vehicula, ex turpis malesuada sem, ac venenatis magna erat nec augue.</p>\
		</article></main>'
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
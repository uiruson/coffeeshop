class PagesController < ApplicationController
  def greenhornespressobar
	@instagram = Instagram.tag_recent_media('greenhorncafe' ,{:count => 20})
  end

  def nelsontheseagull
	@instagram = Instagram.tag_recent_media('nelsontheseagull' ,{:count => 20})
  end

  def matchstickvan
	@instagram = Instagram.location_recent_media(8088071,{:count => 20})
  end

  def matchstickchinatown
  	@instagram = Instagram.location_recent_media(222957218,{:count => 20})
  end

   def revolvercoffee
	@instagram = Instagram.tag_recent_media('revolvercoffee' ,{:count => 20})
  end

  def archivebyrevolver
  	@instagram = Instagram.location_recent_media(198454352 ,{:count => 20})
  end

  def lukesgeneralstore
  	@instagram = Instagram.location_recent_media(218409587 ,{:count => 20})
  end

  def timbertraincoffee
  	@instagram = Instagram.location_recent_media(200799296 ,{:count => 22})
  end

  def containercoffee
  	@instagram = Instagram.location_recent_media(36569887, {:count => 23})
  end

  def kafkascoffee
  	@instagram = Instagram.location_recent_media(299554, {:count => 24})
  end

  def continentalcoffee
  	@instagram = Instagram.location_recent_media(58015740, {:count => 24})
  end

  def musettecaffechinatown
  	@instagram = Instagram.location_recent_media(162034999, {:count => 23})
  end

  def fourtyninthparallelkits
  	@instagram = Instagram.location_recent_media(47981, {:count => 31})
  end

  def fourtyninthparallelvan
  	@instagram = Instagram.location_recent_media(17167014, {:count => 28})
  end

  def lemarchestgeorge
  	@instagram = Instagram.location_recent_media(1150890, {:count => 25})
  end

  def bashocafe
  	@instagram = Instagram.location_recent_media(208749875, {:count => 24})
  end


  def marulilucafe
  	@instagram = Instagram.location_recent_media(206279, {:count => 28})
  end


  def momentocoffee
  	@instagram = Instagram.location_recent_media(3116214, {:count => 30})
  end


  def innocentcoffee
  	@instagram = Instagram.location_recent_media(544408, {:count => 26})
  end
end







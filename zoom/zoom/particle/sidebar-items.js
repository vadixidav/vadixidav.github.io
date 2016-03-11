initSidebarItems({"fn":[["gravitate","Apply proper attraction between two physics particles based on their quanta and position."],["gravitate_radius","If gravitating at a distance greater than the net radius, then gravitational interaction is applied as if the particles are point particles. If the distance is less than the radius, then the interaction happens as if the gravitational quanta (mass) is evenly distributed and gravitational flux is used instead, which causes the interaction to become proportional to the radius, meaning that as the radius approaches zero, so does the force."],["gravitate_radius_squared","This is the same as the radius function, but the sum of the radii squared is passed separately to avoid overhead."],["hooke","Apply spring forces between two particles."],["hooke_equilibrium","Apply spring forces between two particles with specified equilibrium distance."],["lorentz","Apply lorentz forces between two PhysicsParticle objects based on quanta, position, and velocity."],["lorentz_radius","Apply lorentz forces between two PhysicsParticle + Ball objects assuming uniformly distributed quanta."],["lorentz_radius_squared","Apply lorentz forces between two PhysicsParticle objects using a precomputed net radius."]],"mod":[["basic_particle","Contains traits and methods for the operation of particle physics"]],"trait":[["Inertia","An object that has inertia"],["Particle","An object that has a simple particle motion interface"],["PhysicsParticle","Any particle that implements the necessary traits gains access to all of the capabilities of PhysicsParticle."],["Position","An object that has location"],["Quanta","An object that has quanta"],["Velocity","An object that has velocity"]]});